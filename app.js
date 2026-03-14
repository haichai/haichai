const API = "https://script.google.com/macros/s/AKfycbzACBya1UsXJLv9eXB3KTDGIf-kFYMmaH_AQdxQoBL0k-Pt-TqlvNebZbDIYZEY_VxX/exec"
let links = []
let logs = []
let scanChartInstance = null
let deviceChartInstance = null

function parseDateInput(value) {
  if (!value) return null
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d
}

function getDateRange(fromId, toId) {
  const from = parseDateInput(document.getElementById(fromId).value)
  const toVal = parseDateInput(document.getElementById(toId).value)

  if (!from && !toVal) return {from: null, to: null}

  const to = toVal ? new Date(toVal) : null
  if (to) {
    to.setHours(23, 59, 59, 999)
  }

  return {from, to}
}

function filterLogsByRange(logs, from, to) {
  if (!from && !to) return logs
  return logs.filter(l => {
    const t = new Date(l.time)
    if (from && t < from) return false
    if (to && t > to) return false
    return true
  })
}

function countUniqueIps(logs) {
  const ips = new Set()
  logs.forEach(l => {
    if (l.ip) ips.add(l.ip)
  })
  return ips.size
}

function uniqueByIp(logs) {
  const seen = new Set()
  return logs.filter(l => {
    if (!l.ip) return false
    if (seen.has(l.ip)) return false
    seen.add(l.ip)
    return true
  })
}

async function init() {
  links = await fetch(API + "?type=links").then(r => r.json())
  logs = await fetch(API + "?type=logs").then(r => r.json())

  document.getElementById("applyDateFilter").addEventListener("click", renderDashboard)
  document.getElementById("clearDateFilter").addEventListener("click", () => {
    document.getElementById("fromDate").value = ""
    document.getElementById("toDate").value = ""
    renderDashboard()
  })

  document.getElementById("applyLogsDateFilter").addEventListener("click", renderLogs)
  document.getElementById("uniqueIpOnly").addEventListener("change", renderLogs)
  document.getElementById("clearLogsDateFilter").addEventListener("click", () => {
    document.getElementById("logsFromDate").value = ""
    document.getElementById("logsToDate").value = ""
    renderLogs()
  })

  renderDashboard()
  renderQR()
  renderLogs()
}

function renderDashboard() {
  const range = getDateRange("fromDate", "toDate")
  const filteredLogs = filterLogsByRange(logs, range.from, range.to)

  document.getElementById("totalQR").innerText = links.length
  document.getElementById("totalScan").innerText = logs.length

  const today = new Date().toDateString()
  const todayScan = logs.filter(l => new Date(l.time).toDateString() === today)
  document.getElementById("todayScan").innerText = todayScan.length

  document.getElementById("rangeScan").innerText = filteredLogs.length
  document.getElementById("uniqueScan").innerText = countUniqueIps(filteredLogs)

  let dateCount = {}

  filteredLogs.forEach(l => {
    let d = new Date(l.time).toISOString().slice(0, 10)
    if (!dateCount[d]) dateCount[d] = 0
    dateCount[d]++
  })

  if (scanChartInstance) scanChartInstance.destroy()
  scanChartInstance = new Chart(document.getElementById("scanChart"), {
    type: "line",
    data: {
      labels: Object.keys(dateCount),
      datasets: [{
        label: "Scan",
        data: Object.values(dateCount),
        borderColor: "#3b82f6"
      }]
    }
  })
}

function renderQR() {
  const grid = document.getElementById("qrGrid")
  grid.innerHTML = ""

  links.forEach(link => {
    let count = logs.filter(l => l.id == link.id).length
    let div = document.createElement("div")

    div.innerHTML = `
<h3>${link.id}</h3>
<p>${count} scan</p>
`
    div.onclick = () => showDetail(link.id)
    grid.appendChild(div)
  })
}

function renderLogs() {
  const range = getDateRange("logsFromDate", "logsToDate")
  const filtered = filterLogsByRange(logs, range.from, range.to)

  const uniqueOnly = document.getElementById("uniqueIpOnly")?.checked
  const displayed = uniqueOnly ? uniqueByIp(filtered) : filtered

  const uniqueCount = countUniqueIps(filtered)
  const summary = document.getElementById("logsSummary")
  if (summary) {
    summary.innerText = `Showing ${displayed.length} logs (${uniqueCount} unique IP${uniqueCount === 1 ? "" : "s"})`
  }

  const table = document.getElementById("allLogs")
  table.innerHTML = `
<tr>
<th>Time</th>
<th>QR</th>
<th>IP</th>
<th>Location</th>
<th>Device</th>
</tr>
`

  displayed.slice(-100).reverse().forEach(d => {
    let tr = document.createElement("tr")
    tr.innerHTML = `
<td>${new Date(d.time).toLocaleString()}</td>
<td>${d.id}</td>
<td>${d.ip}</td>
<td class="log-location">Loading...</td>
<td>${d.ua}</td>
`
    table.appendChild(tr)

    // Resolve geo location for IP (cached)
    resolveIpLocation(d.ip).then(location => {
      const cell = tr.querySelector(".log-location")
      if (cell) cell.innerText = location
    })
  })
}

const ipLocationCache = {}

function resolveIpLocation(ip) {
  if (!ip) return Promise.resolve("-")
  if (ipLocationCache[ip]) return ipLocationCache[ip]

  const promise = fetch(`https://ipapi.co/${ip}/json/`)
    .then(r => {
      if (!r.ok) throw new Error("network")
      return r.json()
    })
    .then(data => {
      if (data.error) throw new Error(data.reason || "unknown")
      const parts = []
      if (data.city) parts.push(data.city)
      if (data.region) parts.push(data.region)
      if (data.country_name) parts.push(data.country_name)
      return parts.length ? parts.join(", ") : "Unknown"
    })
    .catch(() => "Unknown")

  ipLocationCache[ip] = promise
  return promise
}


function showDetail(id) {
  showPage("detail")
  document.getElementById("qrTitle").innerText = id

  let data = logs.filter(l => l.id == id)
  document.getElementById("qrTotal").innerText = data.length

  let device = {}
  data.forEach(d => {
    if (!device[d.ua]) device[d.ua] = 0
    device[d.ua]++
  })

  if (deviceChartInstance) deviceChartInstance.destroy()
  deviceChartInstance = new Chart(document.getElementById("deviceChart"), {
    type: "pie",
    data: {
      labels: Object.keys(device),
      datasets: [{
        data: Object.values(device)
      }]
    }
  })

  const table = document.getElementById("logTable")
  table.innerHTML = `
<tr>
<th>Time</th>
<th>IP</th>
<th>Device</th>
</tr>
`

  data.slice(-10).reverse().forEach(d => {
    let tr = document.createElement("tr")
    tr.innerHTML = `
<td>${new Date(d.time).toLocaleString()}</td>
<td>${d.ip}</td>
<td>${d.ua}</td>
`
    table.appendChild(tr)
  })
}

function showPage(id) {
  document.querySelectorAll("section").forEach(s => s.classList.add("hidden"))
  document.getElementById(id).classList.remove("hidden")

  if (id === "logs") renderLogs()
}

init()

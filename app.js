const API="https://script.google.com/macros/s/AKfycbzACBya1UsXJLv9eXB3KTDGIf-kFYMmaH_AQdxQoBL0k-Pt-TqlvNebZbDIYZEY_VxX/exec"
let links=[]
let logs=[]

async function init(){

links=await fetch(API+"?type=links").then(r=>r.json())
logs=await fetch(API+"?type=logs").then(r=>r.json())

renderDashboard()
renderQR()

}

function renderDashboard(){

document.getElementById("totalQR").innerText=links.length
document.getElementById("totalScan").innerText=logs.length

let today=new Date().toDateString()

let todayScan=logs.filter(l=>new Date(l.time).toDateString()==today)

document.getElementById("todayScan").innerText=todayScan.length

let dateCount={}

logs.forEach(l=>{

let d=new Date(l.time).toISOString().slice(0,10)

if(!dateCount[d]) dateCount[d]=0

dateCount[d]++

})

new Chart(document.getElementById("scanChart"),{

type:"line",

data:{
labels:Object.keys(dateCount),
datasets:[{
label:"Scan",
data:Object.values(dateCount),
borderColor:"#3b82f6"
}]
}

})

}

function renderQR(){

const grid=document.getElementById("qrGrid")

links.forEach(link=>{

let count=logs.filter(l=>l.id==link.id).length

let div=document.createElement("div")

div.innerHTML=`
<h3>${link.id}</h3>
<p>${count} scan</p>
`

div.onclick=()=>showDetail(link.id)

grid.appendChild(div)

})

}

function showDetail(id){

showPage("detail")

document.getElementById("qrTitle").innerText=id

let data=logs.filter(l=>l.id==id)

document.getElementById("qrTotal").innerText=data.length

let device={}

data.forEach(d=>{

if(!device[d.ua]) device[d.ua]=0
device[d.ua]++

})

new Chart(document.getElementById("deviceChart"),{

type:"pie",

data:{
labels:Object.keys(device),
datasets:[{
data:Object.values(device)
}]
}

})

const table=document.getElementById("logTable")

table.innerHTML=`
<tr>
<th>Time</th>
<th>IP</th>
<th>Device</th>
</tr>
`

data.slice(-10).reverse().forEach(d=>{

let tr=document.createElement("tr")

tr.innerHTML=`
<td>${new Date(d.time).toLocaleString()}</td>
<td>${d.ip}</td>
<td>${d.ua}</td>
`

table.appendChild(tr)

})

}

function showPage(id){

document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"))

document.getElementById(id).classList.remove("hidden")

}

init()

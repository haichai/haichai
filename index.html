<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Haichai QR Dashboard - Pro Version</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js"></script>
    <!-- THƯ VIỆN BỔ SUNG CHO TÍNH NĂNG UPLOAD HÀNG LOẠT -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
</head>
<body class="bg-gray-50 font-sans h-screen overflow-hidden">

    <div id="loginScreen" class="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Hệ Thống Nội Bộ haichai</h2>
            <p class="text-gray-500 mb-6 text-sm">Xác thực quyền quản trị @starspirits.vn</p>
            <button id="btnLogin" class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition shadow-sm">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5">
                Đăng nhập bằng Google
            </button>
            <p id="loginError" class="text-red-500 text-sm mt-4 hidden font-medium"></p>
        </div>
    </div>

    <!-- MODAL LỊCH SỬ THAY ĐỔI -->
    <div id="historyModal" class="fixed inset-0 bg-black bg-opacity-60 z-[60] flex items-center justify-center hidden p-4">
        <div class="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[80vh]">
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
                <div>
                    <h3 class="text-xl font-bold text-gray-800">Lịch sử thay đổi</h3>
                    <p id="historyTargetId" class="text-blue-600 font-mono text-sm font-bold"></p>
                </div>
                <button id="btnCloseHistory" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            <div id="historyList" class="overflow-y-auto p-6 space-y-4 flex-grow">
            </div>
        </div>
    </div>

    <!-- MODAL XÁC NHẬN UPLOAD HÀNG LOẠT -->
    <div id="bulkModal" class="fixed inset-0 bg-black bg-opacity-60 z-[70] hidden items-center justify-center p-4 flex">
        <div class="bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[85vh]">
            <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
                <div>
                    <h3 class="text-xl font-bold text-gray-800">Xác nhận tạo QR hàng loạt</h3>
                    <p class="text-sm text-gray-500 mt-1">Hệ thống sẽ lưu link và tự động tạo file ZIP chứa tất cả mã QR.</p>
                </div>
                <button id="btnCloseBulk" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            <div class="p-6 overflow-y-auto flex-grow">
                <div class="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-4 text-sm flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Đã quét và phân tích được <strong id="bulkCount" class="text-lg">0</strong> mã hợp lệ từ file (Cột 1: ID, Cột 3: Link Gốc).</span>
                </div>
                <table class="w-full text-left text-sm border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead class="bg-gray-100 sticky top-0 shadow-sm">
                        <tr>
                            <th class="p-3 border-b border-gray-200 font-semibold w-1/3">ID QR (Cột 1)</th>
                            <th class="p-3 border-b border-gray-200 font-semibold w-2/3">Link Đích Gốc (Cột 3)</th>
                        </tr>
                    </thead>
                    <tbody id="bulkTableBody" class="divide-y divide-gray-100"></tbody>
                </table>
            </div>
            <div class="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3">
                <button id="btnCancelBulk" class="px-5 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-semibold transition">Hủy bỏ</button>
                <button id="btnConfirmBulk" class="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-md transition flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Lưu & Tải file ZIP
                </button>
            </div>
        </div>
    </div>

    <div id="mainDashboard" class="h-full overflow-y-auto hidden p-6 flex flex-col">
        <div class="max-w-7xl mx-auto flex-grow w-full">
            
            <div class="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800">haichai Dashboard</h1>
                    <div class="flex items-center gap-2 mt-1">
                        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p id="userInfo" class="text-sm font-semibold text-gray-600">Đang tải...</p>
                        <button id="btnLogOut" class="text-xs text-red-500 hover:text-red-700 underline ml-2">Đăng xuất</button>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                    <a href="https://haichai.github.io/luckyspin/" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold shadow-md flex items-center gap-2 transition-all text-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                        </svg>
                        Tạo popup giới thiệu
                    </a>
                    
                    <a href="https://script.google.com/a/macros/starspirits.vn/s/AKfycbyf86tNLIRveUFEOBFZmS1kUrpMTHlVKSTbpDM2XudoI1zax7qGC54jZRuTiqDD0keHdQ/exec" target="_blank" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-bold shadow-md flex items-center gap-2 transition-all text-sm">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                        </svg>
                        Copy file drive
                    </a>
                    
                    <div class="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2">
                        <span>Tổng lượt quét:</span>
                        <span id="totalScans" class="text-3xl">0</span>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-blue-200 mb-8 overflow-hidden">
                <div class="flex flex-col md:flex-row border-b border-gray-100">
                    <div class="p-6 flex-1 bg-blue-50/40" id="qrFormSection">
                        <h2 class="text-xl font-bold text-gray-800 mb-1">Tạo & Sửa QR Động</h2>
                        <p class="text-sm text-gray-500 mb-6 italic">Mọi thay đổi link sẽ được hệ thống lưu lại nhật ký để khôi phục khi cần.</p>
                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <div class="w-1/3">
                                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Worker Domain</label>
                                    <input type="text" id="qrBaseUrl" value="https://store.haichai.workers.dev/" class="w-full border border-gray-300 rounded-lg p-2.5 text-xs bg-gray-100 text-gray-500" disabled>
                                </div>
                                <div class="w-2/3">
                                    <label class="block text-xs font-bold text-blue-600 uppercase mb-1">ID (VD: menu_oceanpark)</label>
                                    <input type="text" id="qrIdInput" class="w-full border-2 border-blue-200 rounded-lg p-2 text-sm focus:border-blue-500 font-mono focus:outline-none">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-green-600 uppercase mb-1">Destination Link (Link Đích)</label>
                                <input type="text" id="qrDestInput" placeholder="https://..." class="w-full border-2 border-green-200 rounded-lg p-2 text-sm focus:border-green-500 font-mono focus:outline-none">
                            </div>
                            
                            <!-- KHU VỰC NÚT LƯU VÀ UPLOAD HÀNG LOẠT -->
                            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-4 border-t border-blue-100 mt-4 pt-4">
                                <p class="text-xs text-gray-400">Trỏ về: <span id="qrResultLink" class="text-blue-500 font-bold break-all">Chưa có</span></p>
                                <div class="flex w-full sm:w-auto gap-2">
                                    <!-- Nút Upload File Ẩn -->
                                    <input type="file" id="bulkFileInput" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" class="hidden">
                                    
                                    <button id="btnBulkUpload" class="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-sm shadow-md transition-all flex items-center justify-center gap-2">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        Upload Excel/CSV
                                    </button>
                                    <button id="btnSave" class="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-sm shadow-md transition-all">
                                        Lưu 1 Link & Cập Nhật
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 md:w-1/3 flex flex-col items-center justify-center bg-white border-l border-gray-100">
                        <div class="bg-white p-2 border border-gray-200 rounded-xl mb-4"><canvas id="qrCanvas" class="opacity-20 transition-opacity"></canvas></div>
                        <button id="btnDownload" class="w-full bg-gray-800 text-white font-semibold py-2 rounded-lg text-sm disabled:opacity-50" disabled>Tải ảnh QR (PNG)</button>
                        <p id="saveStatus" class="text-green-600 text-xs font-bold mt-2"></p>
                    </div>
                </div>

                <div class="p-6">
                    <h3 class="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Danh sách Link & QR đang chạy</h3>
                    <div class="overflow-y-auto max-h-48 border border-gray-100 rounded-xl">
                        <table class="w-full text-left text-sm">
                            <thead class="bg-gray-50 sticky top-0"><tr class="text-gray-500"><th class="p-4 border-b w-1/4">ID</th><th class="p-4 border-b w-2/4">Link Đích</th><th class="p-4 border-b text-center w-1/4">Công cụ</th></tr></thead>
                            <tbody id="linksTableBody"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-wrap items-end gap-4">
                <div class="flex flex-col">
                    <label class="text-xs text-gray-500 mb-1 font-semibold uppercase">Từ ngày</label>
                    <input type="date" id="filterStartDate" class="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500">
                </div>
                <div class="flex flex-col">
                    <label class="text-xs text-gray-500 mb-1 font-semibold uppercase">Đến ngày</label>
                    <input type="date" id="filterEndDate" class="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500">
                </div>
                <div class="flex flex-col min-w-[200px]">
                    <label class="text-xs text-gray-500 mb-1 font-semibold uppercase">Lọc theo mã QR</label>
                    <select id="filterQR" class="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-blue-500">
                        <option value="ALL">-- Tất cả mã QR --</option>
                    </select>
                </div>
                <div class="flex gap-2">
                    <button id="btnApplyFilter" class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">Lọc Dữ Liệu</button>
                    <button id="btnClearFilter" class="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold transition">Xóa Lọc</button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
                    <h2 class="font-bold mb-4 text-gray-700">Lượt quét theo ID (Cơ sở)</h2>
                    <div class="relative h-72 w-full"><canvas id="idChart"></canvas></div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
                    <h2 class="font-bold mb-4 text-gray-700">Lượt quét theo Thành phố</h2>
                    <div class="relative h-72 w-full flex justify-center"><canvas id="cityChart"></canvas></div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-12">
                <div class="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 class="font-bold text-gray-700">Chi tiết lượt quét (100 lượt gần nhất)</h2>
                    <span id="showingCount" class="text-sm text-gray-500">Đang hiển thị: 0</span>
                </div>
                <div class="overflow-x-auto max-h-[500px]">
                    <table class="w-full text-left border-collapse">
                        <thead class="sticky top-0 bg-gray-50 shadow-sm">
                            <tr class="text-gray-600 text-sm">
                                <th class="p-4 border-b font-semibold">Thời gian</th>
                                <th class="p-4 border-b font-semibold">Mã ID</th>
                                <th class="p-4 border-b font-semibold">Thành phố</th>
                                <th class="p-4 border-b font-semibold">Thiết bị</th>
                            </tr>
                        </thead>
                        <tbody id="logTableBody" class="text-sm"></tbody>
                    </table>
                </div>
            </div>
            
            <footer class="w-full text-center py-6 text-gray-400 text-sm font-medium border-t border-gray-200 mt-auto">
                Created by quang
            </footer>

        </div>
    </div>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
        import { getDatabase, ref, onValue, set, push, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
        import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

        // ==========================================
        // KHAI BÁO DANH SÁCH EMAIL NGOẠI LỆ Ở ĐÂY
        // ==========================================
        const VIP_EMAILS = [
            'ngocanhn1410@gmail.com',
            'thuctapsinh2@gmail.com'
        ];

        const firebaseConfig = {
            apiKey: "AIzaSyD_VeofclR5xZI0g_PQv2nSXEM-Dek3kMY",
            authDomain: "haichai-tracking.firebaseapp.com",
            databaseURL: "https://haichai-tracking-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "haichai-tracking",
            storageBucket: "haichai-tracking.firebasestorage.app",
            messagingSenderId: "967741417841",
            appId: "1:967741417841:web:4da562376c02fbb1a26ed0"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        let idChartInstance = null;
        let cityChartInstance = null;
        let allLogs = []; 
        let bulkParsedData = []; // Mảng chứa dữ liệu upload từ file

        const qrCanvas = document.getElementById('qrCanvas');
        const qrIdInput = document.getElementById('qrIdInput');
        const qrDestInput = document.getElementById('qrDestInput');
        const qrBaseUrlInput = document.getElementById('qrBaseUrl');
        
        const qr = new QRious({ element: qrCanvas, size: 200, background: 'white', foreground: '#1f2937' });

        // TẠO & SỬA MÃ QR ĐỘNG + VERSION CONTROL
        function updateQRPreview() {
            let baseUrl = qrBaseUrlInput.value.trim();
            let id = qrIdInput.value.trim();
            if(baseUrl && !baseUrl.endsWith('/')) baseUrl += '/';
            const finalUrl = baseUrl + id;
            document.getElementById('qrResultLink').innerText = id ? finalUrl : 'Chưa có';
            qr.value = id ? finalUrl : 'https://haichai.vn';
        }
        qrIdInput.addEventListener('input', updateQRPreview);

        async function saveLinkWithHistory(id, newUrl) {
            const currentLinkRef = ref(db, 'links/' + id);
            const historyRef = ref(db, 'link_history/' + id);
            const snapshot = await get(currentLinkRef);
            const oldUrl = snapshot.val();

            if (oldUrl && oldUrl !== newUrl) {
                await push(historyRef, {
                    url: oldUrl,
                    timestamp: new Date().toLocaleString('vi-VN'),
                    savedBy: auth.currentUser ? auth.currentUser.email : 'Hệ thống (Upload)'
                });
            }
            await set(currentLinkRef, newUrl);
        }

        // CHỨC NĂNG LƯU LINK ĐƠN LẺ
        document.getElementById('btnSave').addEventListener('click', async () => {
            const id = qrIdInput.value.trim();
            const url = qrDestInput.value.trim();
            if (!id || !url) return alert("Nhập đủ ID và Link sếp ơi!");
            
            document.getElementById('btnSave').innerText = "Đang xử lý...";
            try {
                await saveLinkWithHistory(id, url);
                document.getElementById('saveStatus').innerText = "✓ Đã lưu link!";
                setTimeout(() => document.getElementById('saveStatus').innerText = "", 4000);
                updateQRPreview();
                qrCanvas.classList.remove('opacity-20');
                document.getElementById('btnDownload').disabled = false;
            } catch (e) { alert("Lỗi: " + e.message); }
            document.getElementById('btnSave').innerText = "Lưu 1 Link & Cập Nhật";
        });

        document.getElementById('btnDownload').addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = qrIdInput.value.trim() ? `QR_${qrIdInput.value.trim()}.png` : 'QR.png';
            link.href = qrCanvas.toDataURL('image/png');
            link.click();
        });


        // ==========================================
        // TÍNH NĂNG UPLOAD HÀNG LOẠT (EXCEL/CSV)
        // ==========================================
        const bulkFileInput = document.getElementById('bulkFileInput');
        
        document.getElementById('btnBulkUpload').addEventListener('click', () => bulkFileInput.click());

        bulkFileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if(!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    // Dùng SheetJS đọc file
                    const workbook = window.XLSX.read(data, {type: 'array'});
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const json = window.XLSX.utils.sheet_to_json(worksheet, {header: 1});

                    bulkParsedData = [];
                    // Vòng lặp bỏ qua dòng đầu tiên (i = 1) vì thường là header
                    for(let i = 1; i < json.length; i++) {
                        const row = json[i];
                        if(row && row.length > 0) {
                            // Cột 1 là Tên QR (ID) - index 0
                            const id = row[0] ? String(row[0]).trim() : '';
                            // Cột 2 là Link sau QR - index 1 (Bỏ qua vì hệ thống tự generate)
                            // Cột 3 là Link đích gốc - index 2
                            const destUrl = row[2] ? String(row[2]).trim() : '';
                            
                            if(id && destUrl) {
                                bulkParsedData.push({ id, url: destUrl });
                            }
                        }
                    }

                    if(bulkParsedData.length === 0) {
                        alert("Không tìm thấy dữ liệu hợp lệ! Hãy đảm bảo Dòng 1 là Tiêu đề, Cột 1 chứa ID và Cột 3 chứa Link gốc.");
                        return;
                    }

                    // Render Preview Table
                    const tbody = document.getElementById('bulkTableBody');
                    tbody.innerHTML = '';
                    bulkParsedData.forEach((item, index) => {
                        const rowHtml = `
                            <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition">
                                <td class="p-3 border-b border-gray-100 font-mono text-blue-600 font-bold">${item.id}</td>
                                <td class="p-3 border-b border-gray-100 text-gray-600 max-w-xs truncate" title="${item.url}">${item.url}</td>
                            </tr>
                        `;
                        tbody.insertAdjacentHTML('beforeend', rowHtml);
                    });
                    
                    document.getElementById('bulkCount').innerText = bulkParsedData.length;
                    document.getElementById('bulkModal').classList.remove('hidden');

                } catch (error) {
                    alert("Lỗi khi đọc file: " + error.message);
                }
            };
            reader.readAsArrayBuffer(file);
            this.value = ''; // Reset file input
        });

        // Đóng/Hủy Modal Bulk
        document.getElementById('btnCloseBulk').addEventListener('click', () => document.getElementById('bulkModal').classList.add('hidden'));
        document.getElementById('btnCancelBulk').addEventListener('click', () => document.getElementById('bulkModal').classList.add('hidden'));

        // Xác nhận Upload và Tải ZIP
        document.getElementById('btnConfirmBulk').addEventListener('click', async () => {
            const btn = document.getElementById('btnConfirmBulk');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<span class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span> Đang xử lý ${bulkParsedData.length} mã...`;

            try {
                const zip = new window.JSZip();
                const workerDomain = document.getElementById('qrBaseUrl').value.trim();
                const baseUrl = workerDomain.endsWith('/') ? workerDomain : workerDomain + '/';

                for (let i = 0; i < bulkParsedData.length; i++) {
                    const item = bulkParsedData[i];
                    
                    // 1. Lưu Dữ liệu vào Database tuần tự
                    await saveLinkWithHistory(item.id, item.url);

                    // 2. Tạo QR Base64
                    const qrBulk = new QRious({
                        value: baseUrl + item.id,
                        size: 800, // Size lớn để in nét hơn
                        background: 'white',
                        foreground: '#1f2937'
                    });
                    
                    const base64Data = qrBulk.image.src.split(',')[1];
                    // Thêm vào file ZIP
                    zip.file(`${item.id}.png`, base64Data, {base64: true});
                }

                // 3. Tiến hành đóng gói và tự động tải xuống ZIP
                const content = await zip.generateAsync({type: "blob"});
                window.saveAs(content, `HaiChai_Bulk_QR_${new Date().toISOString().split('T')[0]}.zip`);

                alert(`Đã lưu thành công ${bulkParsedData.length} mã vào hệ thống và tải xuống file ZIP ảnh!`);
                document.getElementById('bulkModal').classList.add('hidden');
                
            } catch (err) {
                alert("Đã xảy ra lỗi trong quá trình xử lý: " + err.message);
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
        });


        // BẢNG QUẢN LÝ LINK & LỊCH SỬ
        async function showHistory(id) {
            const historyRef = ref(db, 'link_history/' + id);
            const snapshot = await get(historyRef);
            const historyData = snapshot.val();
            
            document.getElementById('historyTargetId').innerText = `ID: ${id}`;
            const listEl = document.getElementById('historyList');
            listEl.innerHTML = '';

            if (!historyData) {
                listEl.innerHTML = '<div class="text-center py-10 text-gray-400">Chưa có lịch sử thay đổi cho mã này.</div>';
            } else {
                Object.entries(historyData).reverse().forEach(([key, item]) => {
                    const row = document.createElement('div');
                    row.className = "bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition group";
                    row.innerHTML = `
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase">${item.timestamp}</span>
                            <button class="btn-restore opacity-0 group-hover:opacity-100 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg transition" data-id="${id}" data-url="${item.url}">Khôi phục ↺</button>
                        </div>
                        <p class="text-sm font-mono text-gray-600 break-all">${item.url}</p>
                        <p class="text-[10px] text-gray-400 mt-1 italic">Người thay đổi: ${item.savedBy}</p>
                    `;
                    listEl.appendChild(row);
                });

                document.querySelectorAll('.btn-restore').forEach(btn => {
                    btn.addEventListener('click', async (e) => {
                        const rid = e.target.getAttribute('data-id');
                        const rurl = e.target.getAttribute('data-url');
                        if (confirm(`Khôi phục mã [${rid}] về link cũ?`)) {
                            await saveLinkWithHistory(rid, rurl);
                            document.getElementById('historyModal').classList.add('hidden');
                            alert("Đã khôi phục thành công!");
                        }
                    });
                });
            }
            document.getElementById('historyModal').classList.remove('hidden');
        }

        function renderLinksTable(data) {
            const tbody = document.getElementById('linksTableBody');
            tbody.innerHTML = '';
            if (!data) return;
            Object.entries(data).reverse().forEach(([id, url]) => {
                const tr = document.createElement('tr');
                tr.className = "hover:bg-blue-50 border-b border-gray-50 transition";
                tr.innerHTML = `
                    <td class="p-4 font-bold text-blue-600 font-mono">${id}</td>
                    <td class="p-4 text-gray-500 max-w-xs truncate" title="${url}">${url}</td>
                    <td class="p-4 text-center space-x-2">
                        <button class="btn-edit-link bg-gray-100 px-3 py-1 rounded text-xs hover:bg-gray-200" data-id="${id}" data-url="${url}">Sửa</button>
                        <button class="btn-show-history bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-bold hover:bg-blue-100" data-id="${id}">Lịch sử 🕒</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
            
            document.querySelectorAll('.btn-edit-link').forEach(b => b.addEventListener('click', e => {
                qrIdInput.value = e.target.dataset.id;
                qrDestInput.value = e.target.dataset.url;
                updateQRPreview();
                qrCanvas.classList.remove('opacity-20');
                document.getElementById('btnDownload').disabled = false;
                document.getElementById('qrFormSection').scrollIntoView({ behavior: 'smooth' });
            }));
            document.querySelectorAll('.btn-show-history').forEach(b => b.addEventListener('click', e => showHistory(e.target.dataset.id)));
        }

        // ==========================================
        // KHU VỰC RENDER BIỂU ĐỒ & LOG QUÉT
        // ==========================================
        
        function parseDateString(timeStr) {
            try {
                if (!timeStr) return null;
                const match = timeStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                if (!match) return null;
                const day = match[1].padStart(2, '0');
                const month = match[2].padStart(2, '0');
                const year = match[3];
                return `${year}-${month}-${day}`;
            } catch (e) { return null; }
        }

        function updateQRDropdown(dataArray) {
            const qrSelect = document.getElementById('filterQR');
            const currentSelection = qrSelect.value; 
            const uniqueIDs = [...new Set(dataArray.map(log => log.id).filter(Boolean))];
            let html = '<option value="ALL">-- Tất cả mã QR --</option>';
            uniqueIDs.forEach(id => { html += `<option value="${id}">${id}</option>`; });
            qrSelect.innerHTML = html;
            if (uniqueIDs.includes(currentSelection)) qrSelect.value = currentSelection;
        }

        function renderChartsAndLogs(dataToRender) {
            document.getElementById('totalScans').innerText = dataToRender.length;
            const idCount = {};
            const cityCount = {};
            let tableHtml = '';

            const displayLogs = dataToRender.slice(0, 100);
            document.getElementById('showingCount').innerText = `Đang hiển thị: ${displayLogs.length} / ${dataToRender.length}`;

            dataToRender.forEach(log => {
                idCount[log.id || 'Unknown'] = (idCount[log.id || 'Unknown'] || 0) + 1;
                const city = log.city || "Chưa xác định";
                cityCount[city] = (cityCount[city] || 0) + 1;
            });

            displayLogs.forEach(log => {
                tableHtml += `
                    <tr class="hover:bg-blue-50 transition border-b border-gray-50">
                        <td class="p-4 text-gray-500 whitespace-nowrap">${log.time}</td>
                        <td class="p-4 font-bold text-blue-600">${log.id}</td>
                        <td class="p-4 text-gray-700">${log.city || '-'}</td>
                        <td class="p-4 text-gray-400 text-xs max-w-[200px] truncate" title="${log.ua}">${log.ua}</td>
                    </tr>
                `;
            });
            document.getElementById('logTableBody').innerHTML = tableHtml;

            if(idChartInstance) idChartInstance.destroy();
            idChartInstance = new Chart(document.getElementById('idChart').getContext('2d'), {
                type: 'bar',
                data: {
                    labels: Object.keys(idCount),
                    datasets: [{ label: 'Lượt quét', data: Object.values(idCount), backgroundColor: '#3b82f6', borderRadius: 4 }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });

            if(cityChartInstance) cityChartInstance.destroy();
            cityChartInstance = new Chart(document.getElementById('cityChart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: Object.keys(cityCount),
                    datasets: [{ data: Object.values(cityCount), backgroundColor: ['#f97316', '#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#64748b'] }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        function applyFilters() {
            const startDate = document.getElementById('filterStartDate').value;
            const endDate = document.getElementById('filterEndDate').value;
            const selectedQR = document.getElementById('filterQR').value;

            const filteredData = allLogs.filter(log => {
                if (selectedQR !== 'ALL' && log.id !== selectedQR) return false;
                
                if (startDate || endDate) {
                    const logDateStr = parseDateString(log.time);
                    if (!logDateStr) return false; 
                    if (startDate && logDateStr < startDate) return false;
                    if (endDate && logDateStr > endDate) return false;
                }
                return true;
            });
            renderChartsAndLogs(filteredData);
        }

        document.getElementById('btnApplyFilter').addEventListener('click', applyFilters);
        document.getElementById('btnClearFilter').addEventListener('click', () => {
            document.getElementById('filterStartDate').value = '';
            document.getElementById('filterEndDate').value = '';
            document.getElementById('filterQR').value = 'ALL';
            renderChartsAndLogs(allLogs);
        });

        // ==========================================
        // XỬ LÝ AUTH VÀ KÉO DỮ LIỆU
        // ==========================================
        onAuthStateChanged(auth, user => {
            if (user) {
                if (user.email.endsWith('@starspirits.vn') || VIP_EMAILS.includes(user.email)) {
                    document.getElementById('loginScreen').classList.add('hidden');
                    document.getElementById('mainDashboard').classList.remove('hidden');
                    document.getElementById('userInfo').innerText = user.email;
                    
                    onValue(ref(db, 'links'), snap => renderLinksTable(snap.val()));
                    
                    onValue(ref(db, 'logs'), snap => {
                        const data = snap.val();
                        if (data) {
                            allLogs = Object.values(data).reverse();
                            updateQRDropdown(allLogs);
                            applyFilters();
                        }
                    });
                } else {
                    signOut(auth).then(() => {
                        const errEl = document.getElementById('loginError');
                        errEl.innerText = `Email ${user.email} chưa được cấp quyền truy cập!`;
                        errEl.classList.remove('hidden');
                    });
                }
            } else {
                document.getElementById('loginScreen').classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            }
        });

        document.getElementById('btnLogin').addEventListener('click', () => {
            document.getElementById('loginError').classList.add('hidden');
            signInWithPopup(auth, provider).catch(error => {
                const errEl = document.getElementById('loginError');
                errEl.innerText = "Lỗi đăng nhập: " + error.message;
                errEl.classList.remove('hidden');
            });
        });
        
        document.getElementById('btnLogOut').addEventListener('click', () => { signOut(auth); window.location.reload(); });
        document.getElementById('btnCloseHistory').addEventListener('click', () => document.getElementById('historyModal').classList.add('hidden'));

    </script>
</body>
</html>

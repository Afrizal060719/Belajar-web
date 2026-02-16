const inputTugas = document.getElementById("input-tugas");
const tambah = document.getElementById("btn-tambah");
const list = document.getElementById("daftar-list");

// Fungsi untuk menyimpan semua tugas ke LocalStorage
// (PR harus di pelajari karena untuk simpan localstorage belum di pelajari)
function simpanData() {
    const semuaTugas = [];
    document.querySelectorAll("#daftar-list li").forEach(li => {
        const teks = li.childNodes[0].textContent.trim();
        semuaTugas.push(teks);
    });
    // Simpan ke LocalStorage dalam bentuk string JSON
    localStorage.setItem("tugasLokal", JSON.stringify(semuaTugas));
}

// PROSES MEMUAT DATA (SAAT WEB DIBUKA)
// (harus di pelajari untuk memuat data untuk di tampikan lagi karena ini belum di palajari)
// Tambahkan fungsi ini agar muatData() tidak error
function buatElemenList(teks) {
    const li = document.createElement("li");
    li.innerHTML = `${teks} <button class="btn-hapus">X</button>`;
    list.appendChild(li);

    const btnHapus = li.querySelector(".btn-hapus");
    btnHapus.addEventListener('click', function() {
        li.remove();
        simpanData(); // Supaya saat hapus, LocalStorage juga update
    });
}

// PROSES MEMUAT DATA (SAAT WEB DIBUKA)
// (harus di pelajari untuk memuat data untuk di tampikan lagi karena ini belum di palajari)
// Eksekusi Muat Data (Jalankan saat web baru terbuka)
function muatData() {
    const dataTugas = JSON.parse(localStorage.getItem("tugasLokal")) || [];
    dataTugas.forEach(tugas => {
        buatElemenList(tugas);
    });
}
muatData();

tambah.addEventListener('click', function() {
    const nilaiTugas = inputTugas.value;

    if (nilaiTugas.trim() === "") {
        alert("form tidak boleh kosong");
        return;
    }

    buatElemenList(nilaiTugas);
    simpanData();

    inputTugas.value = "";
});



// inputTugas.addEventListener('keypress', function(e) {

//     if (e.key === 'Enter') {

//         btnTambah.click(); 

//     }

// });


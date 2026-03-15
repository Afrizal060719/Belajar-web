import { transaksi, dataKeranjang } from './module/transaksi.js';

const form = document.getElementById('produk');
const teksHasil = document.getElementById('datafrom');

const formBayar = document.getElementById('pembayaran');
const select = document.getElementById('pilihbarang');
const tampilBayar = document.getElementById('databayar');

let dataBarang = [];
let modelEdit = false;
let indexEdit = null;

form.addEventListener('submit', function(formP) {
    formP.preventDefault();
    const produk = document.getElementById('namaProduk').value;
    const harga = Number(document.getElementById('hargaBarang').value);
    const stok = Number(document.getElementById('jumlahBarang').value);
    const kategoriP = document.getElementById('kategori').value;

    if (produk === "") {
        alert('input nama barang tidak boleh kosong')
        return
    }
    if (harga === 0) {
        alert('input harga barang tidak boleh kosong')
        return
    }
    if (stok === 0) {
        alert('input jumlah barang tidak boleh kosong')
        return
    }
    if (kategoriP === "") {
        alert('pilih kategori produk')
        return
    }

    if (modelEdit) {
        dataBarang[indexEdit] = {
            nama: produk,
            harga: harga,
            stok:  stok,
            kategori: kategoriP
        };

        modelEdit = false;
        indexEdit = null;
    } else {
        dataBarang.push({
            nama: produk,
            harga: harga,
            stok: stok,
            kategori: kategoriP
        });
    }

    tampilData();
    tampilSelect();
    form.reset();
});

// untuk tampil data di form 1
function tampilData(){
    teksHasil.innerHTML = "";
    dataBarang.forEach((item, index) => {
        const tabel = document.createElement('tr')
        tabel.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.harga}</td>
            <td>${item.stok}</td>
            <td>${item.kategori}</td>
            <td>
                <button class="edit" data-index="${index}">edit</button>
                <button class="hapus" data-index="${index}">hapus</button>
            </td>
        `;
        teksHasil.appendChild(tabel)
    });

    const btnHapus = teksHasil.querySelectorAll('.hapus');
    btnHapus.forEach(btn => {
        btn.addEventListener('click', function(){
            const d = this.dataset.index;
            hapusProduk(d)
        });
    });

    const btnEdit = teksHasil.querySelectorAll('.edit');
    btnEdit.forEach(btnn => {
        btnn.addEventListener('click', function(){
            const index = this.dataset.index;
            editProduk(index);
        })
    })
    
}

function hapusProduk(d){
    const konfirmasi = confirm(`yakin ingin menghapus ${dataBarang[d].nama}`);
    if (konfirmasi){
        dataBarang.splice(d, 1);
        tampilData();
        tampilSelect();
    }
}

function editProduk(index){
    let editData = dataBarang[index];

    document.getElementById('namaProduk').value = editData.nama;
    document.getElementById('hargaBarang').value = editData.harga;
    document.getElementById('jumlahBarang').value = editData.stok;
    document.getElementById('kategori').value = editData.kategori;

    modelEdit = true;
    indexEdit = index;
    
}

//untuk tampil di form 2
function tampilSelect() {
    select.innerHTML = "<option value=''>-- pilih barang --</option>";

    dataBarang.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.nama;
        select.appendChild(option);
    });
}

function keranjang() {
    tampilBayar.innerHTML = "";
    
    dataKeranjang.forEach((item) => {
        const tp = document.createElement('tr');

        tp.innerHTML = `
            <td>${item.nama} (${item.jumlah})</td>
            <td>${item.total}</td>
        `
        tampilBayar.appendChild(tp);
    });
}

formBayar.addEventListener('submit', function(p) {
    p.preventDefault();

    const SelectV = select.value;
    const banyakB = Number(document.getElementById('banyakBarang').value);

    if (SelectV === "") {
        alert("pilih barang dulu");
        return;
    }

    const produkFix = dataBarang[SelectV];

    const hasil = transaksi(produkFix, banyakB);

    if (hasil) {
        keranjang();
    }
});






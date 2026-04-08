import { formatRupiah, hitungTotal } from './module1.js';

let inventory = [];

const tombol = document.getElementById('btn');
const tabelB = document.getElementById('tabelBody');
const hasil = document.getElementById('totalAset');

function rendertabel() {
    tabelB.innerHTML = '';

    inventory.forEach((item) => {
        const tampil = `
            <tr>
                <td>${item.nama}</td>
                <td>${formatRupiah(item.harga)}</td>
                <td>${item.stok}</td>
                <td>${formatRupiah(item.harga * item.stok)}</td>
            </tr>
        `;
        tabelB.innerHTML += tampil;
    });

    hasil.innerHTML = formatRupiah(hitungTotal(inventory));
}

tombol.addEventListener('click', () => {
    const nama = document.getElementById('namaBarang').value;
    const harga = document.getElementById('hargaBarang').value;
    const stok = document.getElementById('stokBarang').value;
    const hargaNum = Number(harga);
    const stokNum = Number(stok);

    if (!nama || isNaN(hargaNum) || isNaN(stokNum)) {
        alert('mohon isi semua data dengan benar');
        return;
    }

    inventory.push({ nama, harga: hargaNum, stok: stokNum });
    document.querySelectorAll('input').forEach(input => input.value = '');
    rendertabel();
});
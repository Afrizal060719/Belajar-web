import {formatRupiah, hitungTotal} from './modul.js';

let inventory = [];

const tombol = document.getElementById('btn');
const tampilB = document.getElementById('dataBarang');
const hasil = document.getElementById('total');

tombol.addEventListener('click', () => {
    const barang = document.getElementById('barang').value;
    const harga = Number(document.getElementById('harga').value);
    const stok = Number(document.getElementById('stok').value);

    if ( !barang || isNaN(harga) || isNaN(stok)) {
        alert('mohon isi dengan benar');
        return;
    }

    inventory.push({barang, harga, stok});
    document.querySelectorAll('input').forEach(input => input.value = '');
    tampilData();

});

function tampilData() {
    tampilB.innerHTML = '';

    inventory.forEach((data) => {
        const row = `
        <tr>
            <td>${data.barang}</td>
            <td>${formatRupiah(data.harga)}</td>
            <td>${data.stok}</td>
            <td>${formatRupiah(data.harga * data.stok)}</td>
        </tr>
        `;
        tampilB.innerHTML += row;
    });

    hasil.innerHTML = formatRupiah(hitungTotal(inventory));
}
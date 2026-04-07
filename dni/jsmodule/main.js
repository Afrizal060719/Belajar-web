import { hitungBelanja, formatRupiah } from './module.js';

let produk = document.getElementById('list');

function prosesBelanja() {
    const hargaBarang = produk.value;
    let diskon = 17;

    const totalBelanja = hitungBelanja(hargaBarang, diskon);

    const teks = `harga barang: ${formatRupiah(hargaBarang)}</br>
                  diskon: ${diskon}%</br>
                  total belanja: ${formatRupiah(totalBelanja)}`;

    document.getElementById('app').innerHTML = teks;
}

let tombol = document.getElementById('btn');
tombol.addEventListener('click', prosesBelanja);

export function hitungBelanja(harga, diskon) {
    const potongan = harga * (diskon / 100);
    return harga - potongan;
}

export function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString('id-ID');
}
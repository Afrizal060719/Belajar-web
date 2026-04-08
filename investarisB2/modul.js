export function formatRupiah(angka) {
    const idr = Number(angka) || 0;
    return "Rp" + idr.toLocaleString('id-ID');
}

export function hitungTotal(daftarBarang) {
    return daftarBarang.reduce(function(acc, data) {
        return acc + (data.harga * data.stok);
    }, 0);
}
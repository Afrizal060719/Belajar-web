export function formatRupiah (angka) {
    const n = Number(angka) || 0;
    return "Rp " + n.toLocaleString('id-ID');
};

export const hitungTotal = (daftarBarang) => {
    return daftarBarang.reduce((acc, item) => acc + (item.harga * item.stok), 0)
};
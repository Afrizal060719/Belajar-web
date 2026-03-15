export let dataKeranjang = [];

export function transaksi(produk, jumlah){

    if (jumlah <= 0){
        alert('masukan jumlah barang yang akan di beli');
        return;
    } else if (jumlah > produk.stok) {
        alert('stok barang tidak cukup');
        return;
    }

    const total = produk.harga * jumlah;

    const hasil = {
        nama: produk.nama,
        harga: produk.harga,
        jumlah: jumlah,
        total: produk.harga * jumlah
    };

    dataKeranjang.push(hasil);

    return hasil;
}
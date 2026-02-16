const jumlahB = document.getElementById('jumlahBuku');
const jumlahP = document.getElementById('jumlahPulpen');
const btn = document.getElementById('btnHitung');
const h3 = document.getElementById('hasil');

btn.addEventListener('click', function() {
    const buku = jumlahB.value;
    const pulpen = jumlahP.value;

    // mengubah string ke number
    const numberB = Number(buku);
    const numberP = Number(pulpen);

    // harga barang
    const Buku = 20000;
    const Pulpen = 5000

    // operasi
    const total = (numberB*Buku) + (numberP*Pulpen);
    const diskon = total * 0.10;
    const totalB = total - diskon;
    
    if (total >= 50000) {
        h3.textContent = `selamat anda mendapat diskon Rp.${diskon} jadi yang harus
        anda bayar sebesar Rp.${totalB}`;
    } else {
        h3.textContent = `total belanja yang harus anda bayar sebesar Rp.${total}`;
    }
});
const gajiPokok = document.getElementById('salary');
const lamaKerja = document.getElementById('years');
const statusHadir = document.getElementById('attendance');
const tombol = document.getElementById('checkBtn');
const teksHasil = document.getElementById('result');

tombol.addEventListener('click', function(){
    const gaji = gajiPokok.value;
    const lWork = lamaKerja.value;
    const time = statusHadir.value;
    const bonus = 10;

    const gajiAngka = Number(gaji);
    const workAngka = Number(lWork);

    const totalBonus = (bonus / 100) * gajiAngka;

    if ((workAngka >= 3) || (gajiAngka >= 4000000) || (time === "hadir")) {
        teksHasil.textContent = `Selamat! kamu mendapat bonus sebesar Rp ${totalBonus}`;
    } else {
        teksHasil.textContent =`Maaf, kamu belum memenuhi syarat bonus`;
    }
})
const tombol = document.getElementById('btnCek');
const teksHasil = document.getElementById('hasil');


tombol.addEventListener('click', function(){
    const input = document.getElementById('nilai').value;
    const inputNumber = Number(input);

    if (inputNumber >= 90) {
        teksHasil.textContent = `Selamat anda lulus dengan Grade A`;
    } else if (inputNumber>= 80) {
        teksHasil.textContent = `Selamat anda lulus dengan Grade B`;
    } else if (inputNumber >= 70) {
        teksHasil.textContent = `Selamat anda lulus dengan Grade C, lebih giat belajar ya`;
    } else if (inputNumber >= 60) {
        teksHasil.textContent = `Selamat anda beruntung karena masi bisa lulus dengan Grade D`;
    } else {
        teksHasil.textContent = `Anda belum lulus silahkan mengulang`;
    }
});
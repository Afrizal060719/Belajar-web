let tombol = document.getElementById('btn');
let teksOne = document.getElementById('teksSatu');
let teksTwo = document.getElementById('teksDua');

tombol.addEventListener('click', function(){
    teksOne.innerHTML = 'Teks Satu';
    teksTwo.innerHTML = '<h1>Teks Dua</h1>';
});
const nameHrd = 'yuli sumpil';
const pwHrd = 'yuli123';
const nameKrywn = 'munip';
const pwKrywn = 'munip123';

let inputName = document.getElementById('formName');
let inputPw = document.getElementById('formPw');
let tombol = document.getElementById('btn');

tombol.addEventListener('click', function(){
    let nama = inputName.value;
    let pw = inputPw.value;
    let teks;
    let link;
   
    if (nama === nameHrd && pw === pwHrd) {
        teks = 'selamat datang hrd!';
        link = "<a href='index1.html'>menu hrd</a>"
    } else if (nama === nameKrywn && pw === pwKrywn) {
        teks = 'Selamat datang Karyawan!';
        link = '';
    } else {
        teks = 'Nama atau Password ada yang salah!';
        link = '';
    }
    document.getElementById('result').innerHTML = teks;
    document.getElementById('link').innerHTML = link;

});

 
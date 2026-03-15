const tombol = document.getElementById("ubah");
const judul = document.getElementById("judul");

tombol.addEventListener("click", function(){
    judul.textContent = "Teks berhasil diubah oleh JavaScript";
});
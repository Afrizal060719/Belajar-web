const tombol = document.getElementById("tambah");
const daftar = document.getElementById("daftar");

tombol.addEventListener("click", function(){
    const itemBaru = document.createElement("li");

    itemBaru.textContent = "Belajar JavaScript DOM";

    daftar.appendChild(itemBaru);

});
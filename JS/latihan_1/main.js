let namaD, namaB, hasil;

document.getElementById("btn").onclick = function () {
    namaD = document.getElementById("nama-d").value;
    namaB = document.getElementById("nama-b").value;
    hasil = namaD + " " + namaB;
    console.log(`nama depan kamu adalah ${namaD} dan nama belakang kamu adalah ${namaB}`);

    document.getElementById("hasil").textContent = hasil;
};
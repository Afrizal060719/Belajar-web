export function cofee() {
    const waktu = 5000;

    const waktuDetik = Math.ceil(waktu / 1000);
    console.log(`mohon tunggu pramusaji sedang menyiapkan kopi selama ${waktuDetik} detik`);

    setTimeout(() => {
        console.log(`pramusaji sudah membuat kopi`)
    }, waktu );
}
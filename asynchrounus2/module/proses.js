export function proses() {
    return new Promise((resolve) => {
        console.log('sedang memasak');

        setTimeout(() => {
            console.log('masak sudah selesai');
            resolve()
        }, 5000);
    });
}
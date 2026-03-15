export function buy() {
    return new Promise((resolve) => {
        console.log('sedang membeli bahan bahan');

        setTimeout(() => {
            console.log('bahan bahan sudah terbeli');
            resolve()
        }, 2000);
    });
}
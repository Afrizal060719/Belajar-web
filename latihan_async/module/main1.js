export function olahanAdonan(){
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('adonan selesai di buat');
        }, 8000);
    });
}
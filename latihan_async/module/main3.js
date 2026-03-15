export function saji(){
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('kue sudah di sajikan di meja');
        }, 1000);
    });
}
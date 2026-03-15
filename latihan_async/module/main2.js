export function masak(){
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve('masak adonan sudah selesai, kue siap di sajikan');
        }, 5000);
    });
}
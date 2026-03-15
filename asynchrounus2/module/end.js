export function end(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('saya sudah makan');
        }, 2000);
    });
}
// penanganan dengan promise
function eksekutor(resolve, reject){
    setTimeout(() => {
        console.log('melakukan sesuatu sebelum proses diselesaikan');

        const number = Math.random();

        if (number > 0.5){
            resolve('angka lebih dari 0.5');
        }

        else {
            reject(new Error('anda mendapat error'));
        }
    }, 2000);
}

function doSomthing(){
    return new Promise(eksekutor);
}

console.log(doSomthing());

// callback
function tambah(param1, param2){
    return param1 + param2;
}

function kurang(param1, param2){
    return param1 - param2;
}

function total(param1, param2, aksi){
    let hasil = 0;
    hasil = aksi(param1, param2);
    return hasil
}

console.log(total(5, 83, tambah));
console.log(total(65, 34, kurang));
// contoh penanganan promise dengan async / await
function utama(resolve, reject){
    console.log('pesanan anda akan di proses selama 5 detik')

    setTimeout(() => {
        const number = 3;
        
        if(number === 5){
            resolve('pesanan selesai di buat dan akan di antar');
        } else {
            reject(new Error('pesanan gagal di buat karena bahan bahan habis'));
        }
    }, 5000);
}

function kasir(){
    return new Promise(utama);
}

async function proses(){
    try {
        console.log('1. pesan di kasir');
        
        const hasil = await kasir();

        console.log('2. baik' + hasil);
    } catch (error) {
        console.log('sepertinya bahan baku habis:', error.message);
    } finally {
        console.log('proses sudah selesai')
    }
}

proses();
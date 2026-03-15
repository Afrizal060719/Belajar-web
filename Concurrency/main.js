const seduhKopi = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('kopi hitam siap'), 3000);
    });
}

const panggangRoti = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('roti panggang siap'), 4000);
    });
}

const gorengTelur = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('telur dadar siap'), 5000);
    });
}


async function buatSarapan(){
    console.log('persipan mau makan pagi');
    const waktu = Date.now();

    try {
        const prosesKopi = seduhKopi();
        const prosesRoti = panggangRoti();
        const prosesTelur = gorengTelur();

        const hasil = await Promise.all([prosesKopi, prosesRoti, prosesTelur]);

        console.log([0]);
        console.log([1]);
        console.log([2]);

        const selesai = Date.now();
        console.log(`sarapan sudah selesai dalam ${(selesai - waktu) / 1000} detik `);
    } catch (error) {
        console.error('sarapan gagal di buat karena', error);
    }
}

buatSarapan();
import {olahanAdonan} from './module/main1.js';
import {masak} from './module/main2.js';
import {saji} from './module/main3.js';

async function jalan(){
    try {
        console.log('1. persiapan membeli bahan bahan');

        const step1 = await olahanAdonan();
        console.log(step1);

        const step2 = await masak();
        console.log(step2);

        const step3 = await saji();
        console.log(step3);

        console.log('silahkan makan');
    } catch (error){
        console.error('ada kendala saat kue di buat', error);
    }
}

jalan()
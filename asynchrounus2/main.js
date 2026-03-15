import {buy} from './module/buy.js';
import {proses} from './module/proses.js';
import {end} from './module/end.js';

console.log('saya mau masak');

buy()
    .then(() => proses())
    .then(() => end())
    .then(() => {
        console.log('saya sudah makan');
    });


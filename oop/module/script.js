// Classes and data are kept in this module to keep state encapsulated
class Hewan {
    #saldo = 0;

    constructor(nama) {
        this.nama = nama;
    }

    tambahSaldo(jumlah) {
        this.#saldo += jumlah;
    }

    getSaldo() {
        return this.#saldo;
    }

    info() {
        return `Nama: ${this.nama}`;
    }
}

class Kucing extends Hewan {
    constructor(nama, warna) {
        super(nama);
        this.warna = warna;
    }

    info() {
        return `jenis: kucing | ${super.info()} | Warna: ${this.warna}`;
    }
}

class Anjing extends Hewan {
    constructor(nama, ras) {
        super(nama);
        this.ras = ras;
    }

    info() {
        return `jenis: anjing | ${super.info()} | ras: ${this.ras}`;
    }
}

export const daftarHewan = [];

export function tambahHewan({ nama, jenis, extra, saldo = 0 }) {
    let hewan;
    if (jenis === 'kucing') {
        hewan = new Kucing(nama, extra);
    } else {
        hewan = new Anjing(nama, extra);
    }

    const nSaldo = Number.isNaN(parseInt(saldo)) ? 0 : parseInt(saldo);
    hewan.tambahSaldo(nSaldo);
    daftarHewan.push(hewan);
    render();
}

export function render() {
    const list = document.querySelector('#listhewan');
    if (!list) return;
    list.innerHTML = '';

    daftarHewan.forEach((hewan, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        const pInfo = document.createElement('p');
        pInfo.textContent = hewan.info();

        const pSaldo = document.createElement('p');
        pSaldo.textContent = `Saldo: Rp${hewan.getSaldo()}`;

        const btn = document.createElement('button');
        btn.textContent = '+ Saldo';
        btn.addEventListener('click', () => tambahSaldo(index));

        card.appendChild(pInfo);
        card.appendChild(pSaldo);
        card.appendChild(btn);

        list.appendChild(card);
    });
}

export function tambahSaldo(index) {
    const jumlah = prompt('tambah saldo:');
    const n = parseInt(jumlah);
    if (!Number.isNaN(n)) {
        daftarHewan[index].tambahSaldo(n);
        render();
    }
}
//Soal 1 
class Persegi {
    constructor(sisi){
        this.Sisi = sisi;
    };
    perkalian(){
        return this.Sisi * this.Sisi;
    }
    pertambahan(){
        return this.Sisi + this.Sisi;
    }
    pengurangan(){
        return this.Sisi - this.Sisi;
    }
    pembagian(){
        return this.Sisi / this.Sisi;
    }
}
const sisiPersegi = new Persegi(15)
console.log(sisiPersegi.pertambahan());
console.log(sisiPersegi.perkalian());
console.log(sisiPersegi.pengurangan());
console.log(sisiPersegi.pembagian());



//Soal 2 
const map = Array.prototype.map;
function separate(string) {
    const separated = map.call(string, el => {
        return `${el}`;
    });
    console.log(separated.sort());
}
separate("maika");



//Soal 3
function anda(umur){
    if(umur => 18){
        console.log('Besar')
    }
    else {
        console.log('Belum Besar')
    }
}

anda(19)



//Soal 4
class identitas {
    constructor(nama, tinggal, umur){
        this.Nama = nama;
        this.Tinggal = tinggal;
        this.Umur = umur;
    };
};
const identitasNew = new identitas("Maika", "Sanggar Indah Banjaran", "17")
console.log(identitasNew);



//Soal 5
class Saya {
    constructor(nama, kelas, umur, jurusan, sekolah){
        this.Nama = nama;
        this.Kelas = kelas;
        this.Umur = umur;
        this.Jurusan = jurusan;
        this.Sekolah = sekolah;
    };
    tentangSaya (){
        return (
            "Halo, nama saya " + this.Nama + "Kelas " + this.Kelas + "Umur saya " + this.Umur + "Jurusan saya adalah " + this.Jurusan + "di " + this.Sekolah
        )
    }
};

const yes = new Saya("Maika Rafa, ", "XI RPL 2, ", "17 Tahun, " , "RPL ", "SMK Yadika Soreang. ")
console.log(yes.tentangSaya());


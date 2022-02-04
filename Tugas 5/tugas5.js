//Soal 1
const myObj = [
    { name: 'shark', likes: 'ocean'},
    { name: 'whale', likes: 'ocean'},
    { name: 'turtle', likes: 'pond'},
    { name: 'otter', likes: 'fish biscuit'},
    { name: 'lion', likes: 'land'},
    { name: 'nemo', likes: 'ocean'},
]

const begitu = myObj.map(item => {
    const begini = {}

    begini[item.name] = item.likes
    begini.species = item.name.length * Math.floor(Math.random() *1000)

    return begini
})
console.log(begitu)

//Soal 2
const fill = myObj.filter((per) => {
    return per.likes == "ocean"
})
console.log(fill); 


//Soal 3
const name = "maika"
const map = Array.prototype.map;

const newName = map.call(name, el => {
    return `${el}ai`
})
console.log(newName[0])


//Soal 4
let angka = [100, 25, 16, 56, 87]
let perkalian = angka.map(function(nomor) {
    return nomor * 5
})
console.log(perkalian)


//Soal 5
let pengurangan = angka.map(function(nomor) {
    return nomor - 100
})
console.log(pengurangan)


//Soal 6
let pertambahan = angka.map(function(nomor) {
    return nomor + 5
})
console.log(pertambahan)


//Soal 7
let iniNomor = [1,2,3,4,5,6,7,8,9,10]
let mengecek = iniNomor.filter(lebihBesar);

function lebihBesar(yes){
return yes > 5;
}

console.log(mengecek);


//Soal 8
let mencoba = iniNomor.filter(lebihKecil);

function lebihKecil(yes){
return yes < 6;
}

console.log(mencoba);


//Soal 9
const joss = [1,2,3,4,5,6,5,4,7,54,5,6,7,8,7,5,5,5,5]
const pilih = joss.filter(angkaLima);
function angkaLima(joss) {
    return joss == 5
}
console.log(pilih)


//Soal 10
const yoss = ['lucky', 'Lucky', 'Lucky', 'fauzi', 'fauzi','Lucky', 'lucky']
const memilih = yoss.filter(yangBenar);
function yangBenar(yoss) {
    return yoss == "Lucky"
}
console.log(memilih)
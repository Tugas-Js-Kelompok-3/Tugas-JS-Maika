

// TUGAS PERULANGAN


//Soal 1: For
const benda = ['Palu', 'Besi', 'Meja', 'Komputer'];

for (let c = 0; c < benda.length; c++) {
    console.log(benda[c]);
}


// > For in
const hewan = ['Kucing', 'Anjing', 'Burung', 'Dino'];
let a = 0;

for( let a in hewan ) {
    console.log(hewan[a])
}


// > For of
const buah = ['Apel', 'Jeruk', 'Semangka', 'Anggur'];
let b = 0;

for( let b of buah ) {
    console.log(b)
}

//Soal 2: Default Parameter
function angkaGanjil() {
    console.log(1, 3, 5, 7)
}

angkaGanjil()


//Soal 3: Spread Syntax

function spreadSyntax (num1, ...args) {
    console.log(num1, ...args)
}

spreadSyntax(3, 2, 1, 'Roger')


//Soal 4 & 5: Arrow Function dan Function Perkalian
let arrow = (a, b) => {
    pertambahan = a + b ;
};

arrow(7, 9)
console.log(pertambahan);

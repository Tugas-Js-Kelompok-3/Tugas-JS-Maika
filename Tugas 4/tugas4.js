//Soal 1

const countUniqueValues = (arr) => {
    const resultArray = []
    for(const item of arr) {
        if(!resultArray.includes(item)) resultArray.push(item)
    }
    console.log(resultArray.length)
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])
countUniqueValues([])

// Soal 2

function buah (array) {
    console.log(array.join (" "))
}

buah(['Jeruk', 'Apel'])


// Soal 3

function number (nomor) {
    if (nomor <= 0) {
        console.log("True");
    }
    else {
        console.log("False");

    }
}

number(40)
number(-100)
//Soal 1
function trafficLight(lampu) {
    switch(lampu) {
        case "red" :
            return "Stop";
        break ;
        case "yellow" :
            return "Be Careful";
        break ;
        case "green" :
            return "GO!";
        break ;
    }
}
console.log(trafficLight("green"));
// console.log(trafficLight("yellow"));
// console.log(trafficLight("red"));


//Soal 2
const persegi = (sisi) => {
    return sisi **2 * sisi **2 
}
console.log(persegi(15))
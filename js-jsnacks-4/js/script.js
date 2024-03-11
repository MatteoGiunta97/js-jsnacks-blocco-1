/*
- Calcola la somma e la media dei primi 10 numeri.
*/



let numSum = 0;

let numAverage = 0;

for (let index = 0; index < 11; index++) {
    // Calcolo la somma
    numSum += index;
    
    // Calcolo la media
    numAverage = numSum / 10;
}

console.log(numSum)

console.log(numAverage)
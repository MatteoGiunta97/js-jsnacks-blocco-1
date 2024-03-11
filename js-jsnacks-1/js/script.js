/*
- Chiedere all'utente 5 numeri. 
Inserire i numeri nell'array ma senza creare duplicati 
(inserire il numero nell'array solo se non è già presente).
*/



// Chiedo all'utente di digitare 5 numeri

const numbers = [];

for (let index = 0; index < 5; index++) {

    const newNumber = prompt('digitare un numero');

    // Inserisco i numeri digitati in un array se non sono già presenti in esso

    if (numbers.includes(newNumber) === false) {

        numbers.push(newNumber);
    }


}

console.log(numbers)
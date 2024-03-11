/*
- Crea un array vuoto.
  Chiedi per 6 volte all’utente di inserire un numero,
  se è dispari inseriscilo nell’array.
*/



// Creo un array vuoto

const myArray = [];

// Chiedo all'utente di inserire 6 numeri nell'array (solo se dispari)

for (let index = 0; index < 6; index++) {
    
    const newNumber = parseInt(prompt('inserisci un numero'));
    
    //console.log(newNumber)

    if (newNumber % 2 === 0 === false) {

        myArray.push(newNumber);

    }
}

console.log(myArray)
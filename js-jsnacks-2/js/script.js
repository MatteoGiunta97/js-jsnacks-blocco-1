/*
- Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
*/


// Chiedo all'utente di digitare 5 numeri e li sommo
let numSum = 0;

for (let index = 0; index < 5; index++) {
    
    const newNum = parseInt(prompt('digitare un nuovo numero'));
    
    //console.log(newNum)
   
    numSum += newNum;
 
}

 // Stampo la somma dei numeri digitati
console.log(numSum)

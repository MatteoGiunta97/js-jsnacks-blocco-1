/*
BONUS:
- Dato un array contenente 10 numeri, 
stampare in console il numero più grande.
*/



const myArray = [5,2,6,4,8,7,3,10,1,9]

let lrgstNum = myArray[0]

for (let index = 0; index < myArray.length; index++) {
    
    if (myArray[index] > lrgstNum) {
        
        lrgstNum = myArray[index];

        
    }
    console.log(lrgstNum)
}

//console.log(lrgstNum)
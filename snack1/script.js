//crea 2 array con lunghezze diverse
//all array piu corto aggiungere elementi mancanti per essere lungo quanto l altro
const firstArray = [34,67,89,20];
const secondArray = [55,90,66,44,33,22,11,22,22,66,55,7];

let diffLength = 0;
let newArray = [];
let result;

if(firstArray.length < secondArray.length){
    diffLength = secondArray.length - firstArray.length;
    cicleFor(diffLength,newArray);
    result = firstArray.push(...newArray);
    
} else if (secondArray.length < firstArray.length){
    diffLength = firstArray.length - secondArray.length;
    cicleFor(diffLength,newArray);
    result = secondArray.push(...newArray);
    
}

console.log(firstArray);
console.log(secondArray);

//FUNCTION
//funzione che cicla un elemento e pusha nell array numeri casuali
function cicleFor(element,array,variable) {
    for(let i = 0; i < element; i++){
        let variable = array.push(getRndInteger(1,100));
    }
    return variable;
}



//funzione che genera un numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



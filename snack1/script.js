//crea 2 array con lunghezze diverse
//all array piu corto aggiungere elementi mancanti per essere lungo quanto l altro
const firstArray = [34,67,89,20];
const secondArray = [55,90];

let diffLength = 0;
let newArray = [];
let result;

if(firstArray.length < secondArray.length){
    diffLength = secondArray.length - firstArray.length;
    for(let i = 0; i < diffLength; i++){
        newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    result = firstArray.push(...newArray);
    
} else if (secondArray.length < firstArray.length){
    diffLength = firstArray.length - secondArray.length;
    for(let i = 0; i < diffLength; i++){
        newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    result = secondArray.push(...newArray);
    
}

console.log(firstArray);
console.log(secondArray);



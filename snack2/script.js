//crea array vuoto
//chuedi all utente di inserire un number e pushalo nell array finche la sommma diventa <= a 50
const array = [];

let sum = 0;

while(sum < 50){ 
    for (let i = 0; i < array.length; i++) {
        const thisElement = array[i];
        sum = sum + thisElement;
        console.log(sum); 
    }
    let userN = parseInt(prompt('inserisci un numero'));
    array.push(userN);
    console.log(array,sum);
}



// let sum = 0;

// do{
//     let userN = parseInt(prompt('inserisci un numero'));
//     array.push(userN);
//     for (let i = 0; i < array.length; i++) {
//         const thisElement = array[i];
//         sum += thisElement;
//     } 

// } while(sum < 50);



// console.log(array,sum);

// while(sum < 50){
//     const userN = parseInt(prompt('inserisci un numero')); 
//     array.push(userN);
    
    
// }
// console.log(array,sum);
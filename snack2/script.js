//crea array vuoto
//chuedi all utente di inserire un number e pushalo nell array finche la sommma diventa <= a 50
const array = [];

let sum = 0;

while (sum < 50) {
    let userN = parseInt(prompt('inserisci un numero'));
    sum += userN;
    array.push(userN);
}

console.log(array,sum);

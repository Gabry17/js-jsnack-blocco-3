//array numeri
//nel div id red stampare numeri dispari
//nel div id green stamoare numeri pari

const num = [1,2,3,4,5,6,7];
const dispari = [];
const pari = [];

for(let i = 0; i < num.length; i++){
    const thisElem = num[i];
    if(thisElem % 2 === 0){
        pari.push(thisElem);
    } else if(thisElem % 2 === 1){
        dispari.push(thisElem)
    }
}

const red = document.getElementById('red');
const green = document.getElementById('green');

cicleArrayAndPushHTML(pari,red);
cicleArrayAndPushHTML(dispari,green);

//FUNCTION
//questa funzione cicla un array e inserisce il valore dell array in un tag html
function cicleArrayAndPushHTML(nameArray,elemHTML) {
    for(let i = 0; i < nameArray.length; i++){
        const thisArray = nameArray[i];
        elemHTML.innerHTML += ` ${thisArray}`;
    }
}


//creare array di obj squadre
//ogni pproprieta ha nome punti falli
//generare numeri random al posto degli 0

const squadre = [
    {
        nome: 'juve',
        punti: 0,
        falli: 0
    },
    {
        nome: 'milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'inter',
        punti: 0,
        falli: 0
    }
];
squadre.forEach( e => {
    Object.defineProperty(e,'falli', {
        value: Math.floor(Math.random() * 100)
    })
    Object.defineProperty(e,'punti', {
        value: Math.floor(Math.random() * 100)
    })
    
})

console.log(squadre);

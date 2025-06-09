//TODO: Creo un array di numeri che dovrò successivamente memorizzare in pagina

//* inizializzo la funzione rng. Al suo interno creo l'array numberList.
function rng () {
    const numberList = []
    //* inizializzo il ciclo for dentro rng per pushare 5 numeri generati da 1 a 100  dentro l'array
    for(let i=0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 100 ) +1
        numberList.push(randomNumber)
    }
    return numberList
}
//* salvo la funzione in una costante e la loggo in console per verificarne il funzionamento
const memoryGame = rng () 
console.log(memoryGame)

//todo: setto un timer di 30 secondi a partire dalla visualizzazione in pagina dei numeri
//? setto un pulsante di inizio per il timer e per la visualizzazione dei numeri?

// todo: creo 5 imput per l'utente (un form), nei quali inserire, senza ordine, 5 numeri
//* creo un array vuoto nel quale pushare i 5 numeri inseriti dall'utente 

// todo: il software confronta l'array iniziale e il nuovo array 
// todo: il software verifica quanti e quali numeri sono stati inseriti correttamente
//! non importa indovinarli tutti per vincere, aumenta il punteggio


//! BONUS: validazione dei numeri inseriti
/* 
    se si mettono due numeri uguali o si inserisce qualcosa di diverso da un numero,
    il softwre blocca l'utente
 */
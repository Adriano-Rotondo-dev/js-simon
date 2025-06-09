//TODO: Creo un array di numeri che dovrò successivamente memorizzare in pagina

//* inizializzo la funzione rng. Al suo interno creo l'array numberList.
function rng() {
  const numberList = [];
  //* inizializzo il ciclo for dentro rng per pushare 5 numeri generati da 1 a 100  dentro l'array
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    numberList.push(randomNumber);
  }
  return numberList;
}
//* salvo la funzione in una costante
const memoryGame = rng();
//console.log(memoryGame)//
//* salvo in un DOM node gli elementi dell'html sui cui mi interessa lavorare
const numberListEl = document.getElementById("numbers-list");
const countdownEl = document.getElementById("countdown");
const answerFormEl = document.getElementById("answers-form");
const pEl = document.getElementById("instructions")

//todo: setto un timer di 30 secondi a partire dalla visualizzazione in pagina dei numeri

//* creo un timer per far comparire i numeri in pagina dopo 5 secondi
const startGame = setTimeout(() => {
  //*creo una stringa in cui ciclare gli elementi dell'array per mostrarli in pagina
  let listItems = "";
  for (let i = 0; i < memoryGame.length; i++) {
    listItems += `<li>${memoryGame[i]}</li>`;
  }
  alert("Avrai 30 secondi di tempo \nClicca su Ok per iniziare");
  //*verifico il funzionamento del timer con un log
  //console.log("dopo 5 secondi mostro " + memoryGame)
  numberListEl.innerHTML = listItems;
}, 5000);

//*creo un timer che dopo 30 secondi faccia sparire i numeri
const clockTimer = setTimeout(() => {
  alert("Tempo Scaduto! \nInserisci i numeri e testa la tua memoria!");
  //*verifico il funzionamento del timer con un log
  //console.log("Il timer è iniziato. 30 secondi alla rimozione dei numeri");
  numberListEl.innerHTML = "";
  //cambio le istruzioni in pagina
  pEl.innerText = "Prova a ricordare i numeri visualizzati! L'ordine non è importante"
  //rimuovo il display:none al form allo scadere dei 30 secondi
  answerFormEl.classList.remove("d-none");

}, 30000);

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

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
const instructionsEl = document.getElementById("instructions");
const messageEl = document.getElementById("message");
const inputGroupEl = document.getElementById("input-group");
const inputsEl = inputGroupEl.querySelectorAll("input");

//todo: setto un timer di 30 secondi a partire dalla visualizzazione in pagina dei numeri

//* creo un timer per far comparire i numeri in pagina dopo 5 secondi
const startGame = setTimeout(() => {
  //*creo una stringa in cui ciclare gli elementi dell'array per mostrarli in pagina
  let numberString = "";
  for (let i = 0; i < memoryGame.length; i++) {
    numberString += `<li>${memoryGame[i]}</li>`;
  }
  alert("Avrai 30 secondi di tempo \nClicca su Ok o premi invio per iniziare");
  //*verifico il funzionamento del timer con un log
  //console.log("dopo 5 secondi mostro " + memoryGame)
  numberListEl.innerHTML = numberString;
}, 5000);

//*creo un timer che dopo 30 secondi faccia sparire i numeri
const clockTimer = setTimeout(() => {
  alert("Tempo Scaduto! \nInserisci i numeri e testa la tua memoria!");
  //*verifico il funzionamento del timer con un log
  //console.log("Il timer è iniziato. 30 secondi alla rimozione dei numeri");
  numberListEl.innerHTML = "";
  //cambio le istruzioni in pagina
  instructionsEl.innerText =
    "Prova a ricordare i numeri visualizzati! L'ordine non è importante";
  //rimuovo il display:none al form allo scadere dei 30 secondi
  answerFormEl.classList.remove("d-none");
}, 30000);

// todo: il software confronta l'array iniziale e il nuovo array
// todo: il software verifica quanti e quali numeri sono stati inseriti correttamente
//! non importa indovinarli tutti per vincere, aumenta il punteggio
//* creo un event Listener per rimuovere il caricamento della pagina e paragonare i numeri dello user al memoryGame
answerFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  //* creo il let pointCounter per assegnare un punteggio all'utente
  let pointCounter = 0;
  //* creo un array vuoto nel quale pushare i singoli value di inputsEl salvata in precedenza
  const userNumbers = [];
  //* inizializzo il ciclo for per pushare i numeri dentro userNumbers
  for (let i = 0; i < inputsEl.length; i++) {
    userNumbers.push(Number(inputsEl[i].value));
  }
  //* inizializzo un ciclo for per verificare quanti numeri dell'array userNumbers sono presenti anche in memoryGame
  for (let i = 0; i < memoryGame.length; i++) {
    if (userNumbers.includes(memoryGame[i])) {
      pointCounter++;
    }
  }
  if (pointCounter > 0) {
    console.log(`l'utente ha ricordato ${pointCounter} numeri!`);
    //* modifico il contenuto del p #message
    messageEl.innerText = `Hai ricordato ${pointCounter} numeri!`;
  } else {
    //* aggiunto messaggio nel caso di inserimento solo di numeri sbagliati
    messageEl.innerText = "Hai sbagliato tutti i numeri!";
  }
});

//! BONUS: validazione dei numeri inseriti
/* 
    se si mettono due numeri uguali o si inserisce qualcosa di diverso da un numero,
    il software blocca l'utente
*/

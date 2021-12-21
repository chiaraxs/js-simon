// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri vengono nascosti nell’html e l’utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const outputHtml = document.querySelector('.output');

// 1. creo funzione per creazione numeri random da restituire in array vuoto 'numbers'
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// 2. creo array vuoto per numeri random
let numbers = [];

// 3. creo ciclo while per riempire array vuoto con numeri da 1 a 50
// e fissare la lunghezza massima di numbers a 5 
// li pusho randomicamente nell'alert
while(numbers.length < 5) {
    let randomNumber = getRandom(1,50);
    if (!numbers.includes(randomNumber)){
        numbers.push(randomNumber)
    }
}

console.log(numbers) // debug controllo in console

// 4. creo alert che mostra numeri random
alert('Inizia il gioco! Memorizza i seguenti numeri:');

// // 5. setto il timer a 1 s per far apparire i numeri alla chiusura dell'alert
// e farli stampare nel div 'output' 

setTimeout (function () {
    outputHtml.innerHTML = numbers; 
}, 1000);

// 6. setto timer a 3 s per far sparire i numeri e far ricomparire il div 'output' vuoto
setTimeout (function() {
    outputHtml.innerHTML = '';
}, 3000);

// 7. setto timer 4 s -> dopo la scomparsa dei numeri, aggiungo prompt
// setTimeout (function() {
// userNumber = prompt('Inserisci qui i numeri!');
// }, 4000);

// 8. verifico e valido numeri 
let userNumber = [];
let guessed = [];


setTimeout (function() {
    for(let i = 0; i < 5; i++) {
       let userNumber = parseInt(prompt('Inserisci qui i numeri'));
       if (randomNumber.includes(userNumber)){
          guessed.push(userNumber)
        }
    }
 }, 4000);
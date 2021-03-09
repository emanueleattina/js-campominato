// FATTO il computer sceglie 16 numeri casuali da 1 a 100 non duplicati
// TODO chiedere all'utente 100 - 16 volte di inserire un numero da 1 a 100 non duplicati
// TODO se il numero è presente nella lista dei random la partita finisce
// TODO se l'utente inserisce tutti e 100 - 16 numeri la partita finisce
// TODO stampare alla fine il punteggio
// FATTO bonus: livello difficoltà

// inserire livello di difficoltà
do
{
  var diff = parseInt(prompt("Il gioco propone difficoltà da 1 a 3, scegline una:"));

  if (diff > 3 || diff < 1 || (isNaN(diff)))
  {
    alert("Inserisci la difficoltà corretta");
  }
} while(diff > 3 || diff < 1 || (isNaN(diff)));

switch (diff)
{
  case 1:
    max = 100;
    break;

  case 2:
    max = 80;
    break;

  case 3:
    max = 50;
    break;

  default:
    break;
}
console.log(max);


var arrayBomba = [];

while (arrayBomba.length < 16)
{
  var bomba = numeroRandom(1, max)
  if (!arrayBomba.includes(bomba))
  {
    arrayBomba.push(bomba);
  }
}
console.log(arrayBomba);



/* FUNZIONI */

function numeroRandom(min, max)
{
  return Math.floor(Math.random() * max) + min;
}
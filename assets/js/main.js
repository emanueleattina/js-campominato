// il computer sceglie 16 numeri casuali da 1 a 100 non duplicati
// TODO chiedere all'utente 100 - 16 volte di inserire un numero da 1 a 100 non duplicati
// TODO se il numero è presente nella lista dei random la partita finisce
// TODO se l'utente inserisce tutti e 100 - 16 numeri la partita finisce
// TODO stampare alla fine il punteggio

var arrayBomba = [];

while (arrayBomba.length < 16)
{
  var bomba = numeroRandom(1, 100)
  if (!arrayBomba.includes(bomba))
  {
    arrayBomba.push(bomba);
  }
}
console.log(arrayBomba);



/* FUNZIONI */

function numeroRandom(min, max)
{
  var numeroBomba = Math.floor(Math.random() * max) + min;
  return numeroBomba;
}
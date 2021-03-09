// il computer sceglie 16 numeri casuali da 1 a 100 non duplicati
// chiedere all'utente 100 - 16 volte di inserire un numero da 1 a 100 non duplicati
// se il numero è presente nella lista dei random la partita finisce
// se l'utente inserisce tutti e 100 - 16 numeri la partita finisce
// stampare alla fine il punteggio
// bonus: livello difficoltà

// richiamo la funzione per selezionare la difficoltà
var max = selezionaDifficolta();
console.log(max);

// richiamo la funzione per l'array di bombe
var arrayBomba = creaBombe();
console.log(arrayBomba);



/* FUNZIONI */

function selezionaDifficolta()
{
  do
  {
    var diff = parseInt(prompt("Il gioco propone difficoltà da 1 a 3, scegline una:"));

    if (diff > 3 || diff < 1 || (isNaN(diff)))
    {
      alert("Inserisci una difficoltà valida");
    }
  } while(diff > 3 || diff < 1 || (isNaN(diff)));

  switch (diff)
  {
    case 1:
      max = 20;
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
  return max;
}

function numeroRandom(min, max)
{
  return Math.floor(Math.random() * max) + min;
}

function creaBombe()
{
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
}

function controlloBomba (arrayBomba, arrayPrato, max)
{
  var arrayPrato = [];
  var prato;

  while(arrayPrato.length < max - 16)
  {
    prato = parseInt(prompt("Inserisci un numero: "));
    if (!isNaN(prato) && prato >= 1 && prato <= 100 && !arrayPrato.includes(prato))
    {
      if (!arrayBomba.includes(prato))
      {
        arrayPrato.push(prato);
      }
      else 
      {
        return arrayPrato.length;
      }
    }
  }
  return arrayPrato.length;
}
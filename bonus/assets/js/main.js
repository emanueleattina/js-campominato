// chiedere all'utente il cognome
// inserirlo in un array con altri cognomi
// stampare l'array ordinato alfabeticament
// scrivere la posizione nella lista in cui l'utente si trova

var lista = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];
var cognomeUtente;
var cognomeUpper;
var posizione;
var i;
var x;

cognomeUtente = prompt("Inserisci il tuo cognome");

cognomeUpper = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1);
lista.push(cognomeUpper);

lista.sort();

for (i = 0; i < lista.length; i++)
{
  document.getElementById('lista').innerHTML += "<li>" + lista[i] + "</li>";
  if (cognomeUpper == lista[i])
  {
    posizione = i;
    console.log(posizione);
  }
}

for (i = 0; i < lista.length - 1; i++)
{
  for (j = i + 1; j < lista.length; j++)
  {
    if (cognomeUpper[i] > cognomeUpper[j])
    {
      x = cognomeUpper[i];
      cognomeUpper[i] = cognomeUpper[j];
      cognomeUpper[j] = x;
    }
  }
}

document.getElementById('posizione').innerHTML += "Ti trovi alla posizione numero " + (posizione + 1);








// var array = [];
// var n;
// var i;
// var j;
// var x;

// n = parseInt(prompt("Quanti numeri vuoi inserire?"));

// for(i = 0; i < n; i++)
// {
//   array[i] = parseInt(prompt("Inserisci il " + (i + 1) + "° numero"));
//   console.log(array[i]);
// }

// console.log(array);

// for(i = 0; i < array.length; i++)
// {
//   document.getElementById('array').innerHTML += " | " + array[i] + " | ";
// }

// for(i = 0; i < n - 1; i++)
// {
//   for(j = i + 1; j < n; j++)
//   {
//     if (array[i] > array[j])
//     {
//       x = array[i];
//       array[i] = array[j];
//       array[j] = x;
//     }
//   }
// }

// for (i = 0; i < array.length; i++)
// {
//   document.getElementById('arrayOrd').innerHTML += " | " + array[i] + " | ";
// }
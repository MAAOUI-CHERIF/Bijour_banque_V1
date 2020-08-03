import { user } from "./user.js";

console.dir(user);

console.log(
  `hello ${user.firstname}, i know your password :-) ${user.password}`
);

document.querySelector("#firstname").textContent = user.firstname;

// on déclare nos variables
let totalCredit = 0;
let totalDebit = 0;
let solde = 0;
let devise = "€";

// on stocke toutes les opérations de compte dans un array[]
const operationsCompte = [
  ["+", "salaire", 1520],
  ["-", "achat PS4", 499.99],
  ["-", "achat TV", 599],
];

function calcul() {
  let operator = "";
  //doc forEach https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
  operationsCompte.forEach(function (data) {
    console.log(data[0]);
    if (data[0] === "+") {
      totalCredit += data[2];
    } else {
      totalDebit += data[2];
    }
    solde = totalCredit - totalDebit;
  });

  console.log("totalCredit", totalCredit);
  console.log("totalDebit", totalDebit);
  console.log("solde", solde);

  if (solde >= 0) {
    operator = "+";
  } else {
    document.getElementById("total").style.color = "red"; // on affiche le solde en couleur rouge
  }
  // on affiche les résultats sur le DOM
  document.getElementById(
    "total"
  ).textContent = `${operator} ${solde} ${devise}`;
  document.getElementById(
    "totalCredit"
  ).textContent = `${totalCredit} ${devise}`;
  document.getElementById("totalDebit").textContent = `${totalDebit} ${devise}`;
}
// on execute la function
calcul();


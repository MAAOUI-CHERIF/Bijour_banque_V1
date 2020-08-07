let totalCredit=0;
let totalDebit=0;
let percentDebit1=0;
let percentDebit2=0;
let montant=0;
let solde=0;
let devise="€";

let tabCredit=[
    "salaire",
    1520
];

let tabDebit1=[
    "achat PS4",
    499.99,
    percentDebit1,
];

let tabDebit2=[
    "achat TV",
    599,
    percentDebit2,
];

let arrayCredit=[
    tabCredit,
];

let arrayDebit=[
    tabDebit1,
    tabDebit2,
];

let bjbutton=document.getElementById("bjbutton");
console.log(btjbutton);

bjbutton.addEventListener("click", calcul);

let textAera="";
let opertaion="";
let creditContent=document.getElementById("creditContainer");
let debitContent=document.getElementById("debitContainer");

function calcul() {
    opertaion=document.getElementById("operation").Value;
    textAera=document.getElementById("intitule").Value;
    montant=document.getElementById("montant").value;

    if (operation==="+"){
        totalCredit+=montant;
    }else{
        totalDebit+=montant;
    }
    solde=totalCredit-totalDebit;    
    console.log(solde);

    if(solde> 0){
        document.getElementById("solde").innerHTML = `+ ${solde} ${devise}`;
    }else{
        document.getElementById("solde").style.color = "red";
        document.getElementById("solde").innerHTML = `${solde} ${devise}`;        
    }  
    
    document.getElementById("totalCredit").textContent = `${totalCredit} ${devise}`;
    document.getElementById("totalDebit").textContent = `${totalDebit} ${devise}`;

    let addLiContent = document.createElement('li');            
    if(operation==="+"){        
        addLiContent.innerHTML = 
            `
                <span class="intitule">`${intitule}`</span>
                <span class="montant txt-color-gazoil">`${montant}`</span>  
            `
            creditContent.appendChild(addLiContent);
    }else{
        addLiContent.innerHTML = 
        `
              <span class="intitule">`${intitule}`</span>
              <span class="montant txt-color-red">`${montant}`</span>
              <span class="percent txt-color-red"> % </span>
        `
        debitContent.appendChild(addLiContent);
    }     
}
calcul();

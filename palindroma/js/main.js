/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//chiedo all'utente una parola
let parola = prompt('Inserisci una parola');
let parolaReverse = palindroma(parola);

if(parola == parolaReverse){
    console.log('La parola è palindroma');
}else{
    console.log('La parola NON è palindroma');
}

//verifico se la parola inserita è palindroma
function palindroma(parola){

    let parolaReverse = '';

    //mettiamo i > = 0 perchè deve partire al contrario
    for(let i = parola.length - 1; i >= 0; i--){
        parolaReverse += parola[i]; 
    }
   return parolaReverse;
}



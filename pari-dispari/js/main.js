/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//chiedo all'utente cosa sceglie tra pari o dispari
let scelta = prompt('Scegli: pari o dispari?');

if( scelta == "pari"){
    console.log('Pari');
}else if ( scelta == "dispari"){
    console.log('Dispari');
}else{
    console.log(' Puoi scegliere solo tra "pari" o "dispari" ');
}

//e gli chiedo di inserire un numero da 1 a 5
let numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
if(numero <= 5 && numero > 0){
    console.log(numero);
}

//genero numero random per il computer
function genera(min, max){
    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;
    console.log(`Il numero del computer è: ${numeroRandom}`);
}

//invoco la funzione
let numeroRandom = genera(1, 5);

//sommo il numero dell'utente con quello del computer
function sum(x, y){
    let sum = x + y;
    return sum;
}

let valoreSommaFunzione = sum(numero, numeroRandom);
console.log(`La somma è: ${valoreSommaFunzione}`);

//stabiliamo se la somma dei due numeriè pari o dispari 
function controlloSomma(){
    let controllo = '';
    if( valoreSommaFunzione % 2 == 0 ){
        controllo = 'pari';
        return controllo;
    }else{
        controllo = 'dispari';
        return controllo
    }
}


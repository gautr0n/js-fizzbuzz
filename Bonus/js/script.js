//1 stampare tutti i numeri da 1 a 100
//2 al posto di stampare i numeri multipli di 3, 5 e 15 scrivere corrispettivamente Fizz Buzz e FizzBuzz
//3 creare un cointainer a cui aggiungere tramite append() il risultato che veniva invece stampato in console

const contApp = document.querySelector(".container");
let printResult;

for ( let i = 1 ; i <= 100 ; i++){
    if(i % 15 === 0){
        printResult = `FizzBuzz`;
        console.log(printResult);
        contApp.append(printResult+ ", ");
    } else if(i % 3 === 0){
        printResult = `Fizz`;
        console.log(printResult );
        contApp.append(printResult+ ", ");
    } else if( i % 5 === 0){
        printResult = `Buzz`;
        console.log(printResult );
        contApp.append(printResult+ ", ");
    } else {
    console.log(i);
    printResult = i
    contApp.append(printResult + ", ");
    }
};
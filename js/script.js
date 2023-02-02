//1 stampare tutti i numeri da 1 a 100
//2 al posto di stampare i numeri multipli di 3, 5 e 15 scrivere corrispettivamente Fizz Buzz e FizzBuzz
for ( let i = 1 ; i <= 100 ; i++){
    if(i % 15 === 0){
        console.log(`FizzBuzz`);
    } else if(i % 3 === 0){
        console.log(`Fizz`);
    } else if( i % 5 === 0){
        console.log(`Buzz`);
    } else
    console.log(i);
};
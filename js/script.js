let splitType ='';

for (let i=1; i<100; i++){
    if (i % 3==0 && i % 5==0){
        splitType=`FizzBuzz`;
    } else if (i % 5 == 0){
        splitType=`Buzz`;
    } else if (i % 3 == 0){
        splitType=`Fizz`;
    } else{
        splitType = i;
    }
    console.log(splitType);
}
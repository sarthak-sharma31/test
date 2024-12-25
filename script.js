function factorial(num){
    let fact = 1;
    for(i=1; i<=num; i++){
        fact = fact*num;
        num -=1;
    }
    return fact;
}

let a = 10;
console.log(factorial(a));
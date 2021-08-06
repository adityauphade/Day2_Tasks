var result = console.log(Fact(10))

function Fact(n){
    var fact = 1;
    while(n!=1){
        fact = fact*n;
        n--;
    }
    return fact;
}
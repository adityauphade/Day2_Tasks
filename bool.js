var n = 3;

console.log(prime(n))

function prime(n){
    isPrime = true;
    for(i=2;i<n;i++){
        if (n%i == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
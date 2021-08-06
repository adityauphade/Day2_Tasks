const arr = [2, 10, 5, 15, 32, 6, 5, 25]
let len = arr.length;
console.log(len);

var x = 0;
while (len!=0) {
    x = x + arr.pop();
    len--;
}

console.log("The sum is " + x);

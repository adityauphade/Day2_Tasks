//console.log(Revstr("Holdup Baby"))
var str = "Holdup Baby"

var sep = str.split(" ");
console.log(sep);
var final = [];
for(i of sep){
    final.push(i.split("").reverse().join(""));
}
console.log(final);

console.log(final.join(" "));


// console.log(str.split("").join(" "))
// function Revstr(str){
//     return str.split("").reverse().join("");
// }

//split() reverse() & join("") are methods which are storing the characters of string in an array & the reversing the array & finally joining them. methods are defined as "method()"
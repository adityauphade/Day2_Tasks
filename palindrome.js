var input = "12321";
rev = input.split("").reverse().join("")
if (input == rev){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}
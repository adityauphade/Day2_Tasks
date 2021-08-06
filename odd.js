const odd = [];
var x =0;
for(i=2;i<=100;i++){
    var check=i%2;
    if (check == 1) {
        odd[x] = i;
        x++;
        //odd.push(i);   
    }
}
console.log(odd)


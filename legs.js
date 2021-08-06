var chicken = 2; 
var pig = 3;
var cow = 1;
animals(chicken, cow, pig);

function animals(nchicken, ncow, npig){
    var legs = nchicken*2 + ncow*4 + npig*4;
    console.log(legs);
}
const arr = [-13, 4, 19, -23, 95, 2, 8, 136];
console.log(arr.filter(positive));

function positive(value, index, array){
    return value > 0;
}

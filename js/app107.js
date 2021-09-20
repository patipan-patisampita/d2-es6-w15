//Reset parameter
//let number = [1,2,3,4,5];

function sum(x,...num){
    let total = 0;
    for(let n of num){
        total += n;//1; totlal = totlal + n
        //console.log(total);
    }
    return total + x;
}
//console.log(sum(number));
//console.log(sum([6,7,8]));
console.log(sum(7,1,2,3,4,5));
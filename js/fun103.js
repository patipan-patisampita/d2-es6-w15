//1.Pure Function
function addPure(a, b){
    return a + b;
}
console.log('Pure Function:', addPure(5, 10));

//2.Avoid Side Effect

const y = 7;
function addSideEffect(x){
    return x + y;
}

console.log(addSideEffect(1));
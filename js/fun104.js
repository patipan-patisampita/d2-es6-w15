//First Class function
const sayHello = function (){
    return "Hello";
}
console.log(sayHello());

function greeting(callback,name){
    //Callback function
    console.log(callback(), name);
}

greeting(sayHello, "Callback");




//Expression function
let myFirst = function express(){
    return "Return Function";
}
console.log(myFirst());

//Anonymous expression function
let myFunction = function(){
    console.log("My First Function");
}
myFunction();

//Invoking function
(
    function myInvoking(){
        console.log("Self invoking functions");
    }
)();
let person = { name: "mark", age: "30" };
let address ={city: "Rayong", people: 100000};

let p1 = person;
let p2 = {...person,...address};



console.log(person);
p1.name = "x";
p1.age = "35";
console.log(p1);
console.log(p2);
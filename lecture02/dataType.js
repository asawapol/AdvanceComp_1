const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = ture;
const employee = {
    firstName: "Asawapol",
    lastName: "Ratanapakdee"
};

function sayHello(person){
    console.log("Hello " + person.firstName);

}

console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);
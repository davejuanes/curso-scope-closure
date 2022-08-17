// Variables

var a; // declarando
var b = 'b'; // declarando / asignando
b = 'bb' // reasignando el valor
var a = 'aa' // redeclaracion

// Global Scope

var fruit = 'Apple' // global

function bestFruit() {
    console.log(fruit);
}

bestFruit()

function countries() {
    country = 'Bolivia' // global
    console.log(country);
}

countries()
console.log(country);
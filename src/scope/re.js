// Reasignacion y redeclaracion

var firstName; // Undefined
firstName = 'Dave'
console.log(firstName);

var lastName = 'Juanes' // declara / asignar
lastName = 'Ana' // reasignar
console.log(lastName);

var secondName = 'Gonzalo' // declarando / asignando
var secondName = 'Ana' // reasignando
console.log(secondName);

// Let

let fruit = 'Apple' // declarar y asignar
fruit = 'Kiwi' // reasignar
console.log(fruit);

let fruit = 'Banana'
console.log(fruit);

// const
const animal = 'dog' // declara y asigna
animal = 'cat' // reasignando // no funciona sin const //
const animal = 'snake' // Posee block scope
console.log(animal);

const vehicles = []
vehicles.push('Ford')
console.log(vehicles);

vehicles.pop()
console.log(vehicles);
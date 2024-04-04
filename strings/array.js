let readlineSync = require('readline-sync')

let dogs = ['salsicha', 'beagle', 'poodle', 'golden', 'shitzu']
let pergunta = readlineSync.question("escolha o dog: ")

console.log(dogs[pergunta])

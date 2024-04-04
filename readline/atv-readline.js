let readlineSync = require('readline-sync')

let frase = readlineSync.question('escreva uma frase:')
let frase2 = frase.replaceAll('o', 'i')

console.log('frase: ' + frase2.toUpperCase())
console.log(frase2.length)


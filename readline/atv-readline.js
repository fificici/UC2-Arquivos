let readlineSync = require('readline-sync')

let frase = readlineSync.question('escreva uma frase:')
let frase2 = frase.replaceAll('o', 'i')

console.log('frase: ' + frase2.toUpperCase())
console.log(frase2.length)





//criação let q2

//    criação de variavel let q2 que recebe readline.questionInt("Digite um
//   numero: ") abaixo de q1

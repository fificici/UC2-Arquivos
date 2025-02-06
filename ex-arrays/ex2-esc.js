//a)

let array = ['bife', 'frango', 'batata', 'ovo', 'arroz']
console.log(array)

//b)

console.log(`Essas são as minhas comidas preferidas: \n${array.join('\n')}`)

//c)

let readlineSync = require('readline-sync')

let pergunta = readlineSync.question('qual sua comida favorita? ')

array.splice(1, 1, pergunta)

console.log(array)


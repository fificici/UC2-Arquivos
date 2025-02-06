let readlineSync = require('readline-sync')
let soma = 0

for (let i = 0; i < 5; i++) {

    let numero1 = Number(readlineSync.question('digite um numero: '))
    

soma = soma + numero1
}
console.log(soma / 5)
let readlineSync = require('readline-sync')

let nome = readlineSync.question('Qual seu nome? ')
let email = readlineSync.question('Qual seu email? ')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)


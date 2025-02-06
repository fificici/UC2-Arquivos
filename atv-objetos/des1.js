let readlineSync = require('readline-sync')

function perguntas() {
    let nome = readlineSync.question("Qual o seu nome? ")
    let idade = readlineSync.question("Qual a sua idade? ")
    let profi = readlineSync.question("Qual a sua profissao? ")

    let obj = {
        nome: nome,
        idade: idade,
        profissão: profi
    }

    console.log(obj)
    console.log(typeof(obj))
}

perguntas()

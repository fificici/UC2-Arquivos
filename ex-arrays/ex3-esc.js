//a)

let listaDeTarefas = []

//b)

let readlineSync = require('readline-sync')

let pergunta1 = readlineSync.question('tarefa 1: ')
let pergunta2 = readlineSync.question('tarefa 2: ')
let pergunta3 = readlineSync.question('tarefa 3: ')

listaDeTarefas.unshift(pergunta1, pergunta2, pergunta3)

//c)

console.log(listaDeTarefas)

//d)

let remova = readlineSync.question('de 0 a 2 o que tu fez? ')

//e)

listaDeTarefas.splice(remova, 1)

//f)

console.log(listaDeTarefas)
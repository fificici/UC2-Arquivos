let professor = {
    nome: 'Vitor',
    idade: 27,
    tarefas: ['dar aula', 'responder duvidas'],
    contarPiada: function() {
        console.log('é pa ve ou pa come?')
    }
}

console.log(professor.tarefas)
console.log(professor['nome'])

professor.nome = 'Leticia'
professor.idade = 24

console.log(professor.nome)
console.log(professor['idade'])
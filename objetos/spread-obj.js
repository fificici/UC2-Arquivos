let usuario = {
    nome: 'Felipe',
    idade: 18,
    email: 'felipefodao@gmail.fodase',
    cidade: 'São Leopoldo'
}

let novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28
}

console.log(novoUsuario)

let lista = ['mika', 'paula', 'vitor']

let copia = [...lista]
copia[1] = 'felipe'

console.log(copia)
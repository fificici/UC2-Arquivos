// a)

let obj1 = {
    nome: 'Felipe',
    idade: 18,
    profi: 'eletrotécnico'
}

let obj2 = {
    nome: 'Rafaella',
    idade: 17,
    profi: 'secretária'
}

// b)

function atv(obj) {
    let resultado = {
        ...obj
    }
    let resposta = resultado.nome
    let resposta2 = resultado.nome.length
    let resposta3 = resultado.idade
    let resposta4 = resultado.profi
    let resposta5 = resultado.profi.length

    return {resposta, resposta2, resposta3, resposta4, resposta5}
}   

console.log(atv(obj1))
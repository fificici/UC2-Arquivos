let carrinho = []

let fruta1 = {
    nome: 'abacate',
    disponibilidade: true
}

let fruta2 = {
    nome: 'melão',
    disponibilidade: true
}

let fruta3 = {
    nome: 'caqui',
    disponibilidade: true
}

function compras(fruta) {
    carrinho.push(fruta)
    
}

compras(fruta1)
console.log(carrinho)

compras(fruta2)
console.log(carrinho)

compras(fruta3)
console.log(carrinho)

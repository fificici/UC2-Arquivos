let filme1 = {
    ano: 2011,
    nome: 'A Era do Gelo 3'
}

let filme2 = {
    ano: 1976,
    nome: 'Laranja Mecânica'
}


function filmes(filme1, filme2) {
    let resposta1 = filme1.ano < filme2.ano
    let resposta2 = filme1.ano == filme2.ano

    console.log(`O primeiro filme foi lançado antes do segundo? ${resposta1}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${resposta2}`)
}

filmes(filme1, filme2)
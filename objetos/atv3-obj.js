let filme = {
    nome: 'macacos na selva',
    direcao: ['bluezão', 'martina', 'lula'],
    ano: '2069',
    elenco: ['povo nordestino', 'povo carioca'],
    assistiu: false
}

filme.personagens = ['babuínos', 'chimpanzés']

console.log(`${filme.elenco[0]} : ${filme.personagens[0]}\n${filme.elenco[1]} : ${filme.personagens[1]}`)

filme.elenco[0] = 'xuxa'

console.log(filme)

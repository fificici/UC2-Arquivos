let frase = ['oi', 'meu', 'bem', 'rsrsrs', 'sdds']
let mensagem = ''

function concatenacao(array) {
    for (let palavra of array) {
        mensagem = mensagem + palavra  + ' '
    }
    console.log(mensagem)
}
concatenacao(frase)
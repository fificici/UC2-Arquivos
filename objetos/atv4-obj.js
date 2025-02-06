let pessoa = {
    nome: 'Felipe',
    idade: 18,
    musica: 'metal'
}

function criar(objeto) {
    let copia = {
        ...pessoa,
        comidas: ['batata frita', 'ovelha', 'hamburguer'],
        amigo: {
            nomeAmigo: 'Rafaella',
            idadeAmigo: 17
        }
        
    }
    console.log(`O nome da pessoa é ${copia.nome} e suas comidas preferidas são ${copia.comidas[0]}, ${copia.comidas[1]} e ${copia.comidas[2]}. Seu melhor amigo se chama ${copia.amigo.nomeAmigo} e tem ${copia.amigo.idadeAmigo} anos.`)
}

criar(pessoa)
function notas(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3
    console.log(media.toFixed(2))
}

notas(10, 7, 9)

function numero(exemplo) {
    answer = exemplo%2
    if (answer === 0) {
        console.log('par')
    } else {
        console.log('impar')
    }
}

numero(2)

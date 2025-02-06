// a)

const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }

 function frase(objeto) {
    let copia = {
        ...pessoa
    }
    console.log(`Eu sou o ${copia.nome}, mas pode me chamar de: ${copia.apelidos[0]}, ${copia.apelidos[1]} ou ${copia.apelidos[2]}`)
 }

 frase(pessoa)

 // b)
 
 
let pessoa2 = {
    ...pessoa,
    apelidos: ['Vi', 'Vito', 'Vivi']
}

 function frase2(objeto) {
    let copia = {
        ...pessoa2
    }
    console.log(`Eu sou o ${copia.nome}, mas pode me chamar de: ${copia.apelidos[0]}, ${copia.apelidos[1]} ou ${copia.apelidos[2]}`)
 }

frase2(pessoa2)
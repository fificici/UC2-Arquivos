let nome
let idade

typeof nome
typeof idade 

console.log(nome)
console.log(idade)

//apareceu ''undefined'' pois não atribuí nenhum valor as variáveis

nome = "Felipe,"
idade = "18"

console.log(nome, idade)

//agora as variáveis tiveram uma atribuição então foi imprimida de acordo com o que coloquei

console.log("Olá", nome, "você tem", idade, "anos.")

let a = 10
let b = 25
let c 

c = a
a = b 
b = c

console.log("O novo valor de a é,", a)
console.log("O novo valor de b é,", b)
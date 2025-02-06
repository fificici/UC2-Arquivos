const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

//console irá rodar a frase que tu botar tudo com letra maiúscula, substituir as letras A por I e no final o tamanho da frase.
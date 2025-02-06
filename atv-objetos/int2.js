const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //nome: juca, idade: 3, raca: srd
console.log(gato) //nome: juba, idade: 3, raca: srd
console.log(tartaruga) //nome: jubo, idade: 3, raca: srd
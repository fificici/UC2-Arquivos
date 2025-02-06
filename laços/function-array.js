let numeros = [11, 15, 18, 14, 57, 13]
let grande = 0


function maior(array) {
    for(let i = 0; i < array.length; i++){
        if (grande < array[i]) {
            grande = array[i]
        }
    } 
    return grande
}

console.log(maior(numeros))
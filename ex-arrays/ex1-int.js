let array
console.log('a. ', array)

//console irá rodar só 'a. undefined'.

/* -------------------------------------------------------------------
*/

array = null
console.log('b. ', array)

//console irá rodar só 'b. null'.

/* -------------------------------------------------------------------
*/

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//console irá rodar 'c. 11'.

/* -------------------------------------------------------------------
*/

let i = 0
console.log('d. ', array[i])

//console irá rodar 'd. 3'.

/* -------------------------------------------------------------------
*/

array[i+1] = 19
console.log('e. ', array)

//console irá rodar 'e. [3, 19, 5, 6, ...]'.

/* -------------------------------------------------------------------
*/

const valor = array[i+6]
console.log('f. ', valor)

//console irá rodar 'f. 9'.
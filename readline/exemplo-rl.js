let readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('qual sua idade? ', (idade) => {
    console.log('sua idade é:', idade)
    rl.close()
})
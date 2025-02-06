let i = 10

while (i >= 0) {
    if (i == 0){
        console.log(i, 'boom')

    } else if (i % 2 == 0){
        console.log(i, 'tic')
        
    } else {
        console.log(i, 'tac')
    }
    i --
}
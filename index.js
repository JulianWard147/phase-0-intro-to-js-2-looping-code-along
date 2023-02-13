function countDown(num){
    let countvar = num
    while(countvar > -.1){
        console.log(countvar)
        countvar--
        debugger
    }
}

//countDown(10)


function writeCards(namearray, event){
    var cardarray = []
    for (let i = 0; i < namearray.length; i++){
        var cardcont = `Thank you, ${namearray[i]}, for the wonderful ${event} gift!`;
        cardarray.push(cardcont);}
    return cardarray}

//console.log(writeCards(['Test', 'Name', 'Testy Name'], 'Christmas'))

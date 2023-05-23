//multiplos(i)
function multiplos (quantidade) {

    let multiplocinco = 0;

    for(c =0; c <= quantidade; c++){

        if (c % 5 == 0)
        multiplocinco =+ multiplocinco + c;
        
    }
    console.log(multiplocinco);
} 
module.exports = {multiplos}
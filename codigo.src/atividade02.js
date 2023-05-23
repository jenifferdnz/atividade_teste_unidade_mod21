let maior, menor
function num (a, b, c){
    if (a > b && a > c){
        maior = a
        if (b > c){
            menor = b
        }else {
            menor = c   
        }
    }else if (a < b && a < c){
        menor = a
        if (b > c){
            maior = b
        }else {
            maior = c   
        }
    }   
    console.log(menor)
    console.log(maior)
}
num (1, 2, 3)
module.exports = {num}


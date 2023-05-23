function mdcnum (a, b){
    resto = a % b
    while( resto != 0) {
        a = b;
        b = resto;
        resto = a % b;
        return b;
    }
}
//var resu = mdcnum(10, 20);
console.log(mdcnum);
module.exports = {mdcnum}

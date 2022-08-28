/* TABUADA DE 9 */

let multiplicador = 9
let n = 10
let i = 1

while (i <= n) {
    let resultado = multiplicador * i
    let textoDeExibicao = `${multiplicador} X ${i} = ${resultado}`
    console.log(textoDeExibicao)
    i++
}
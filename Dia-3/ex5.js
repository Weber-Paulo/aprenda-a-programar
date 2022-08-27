/* Exercício 2: TABUADA DE 10
*/

let multiplicador = 10
let n = 10 // multiplicar de 1 a n
let i = 1

while (i <= n) {
    let resultado = multiplicador * i
    let textoDeExibicao = `${multiplicador} X ${i} = ${resultado}`
    console.log(textoDeExibicao)
    i++
}
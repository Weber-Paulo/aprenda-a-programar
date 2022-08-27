/* Par ou impar
Vamos criar um código para receber um número e se ele for par mostra no computador
mensagem "O número X é par", e caso o número seja ímpar, mostra a mensagem "O número X é ímpar"
*/

// dado um número
let numero = 120

// operador: %
// saber se é par ou ímpar:
// faz o resto por 2. Se o resto for 0, é par. Se não for 0, é ímpar.
if (numero % 2 == 0) {
    console.log(`${numero} é par!`)
} else {
    console.log(`${numero} é ímpar!`)
}
// me fale se ele é par ou ímpar
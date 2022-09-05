/* VERIFICAR SER O NUMERO É PRIMO */
let num = 17
let primo = `O número ${num} é primo`

if (num == 1) {
    primo = `O número ${num} não é primo`
} else if (num == 2) {
    primo = `O número ${num} é primo`
} else {
    let numero = true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            let numero = false
            primo = `O número ${num} não é primo`
        }
    }
}
console.log(primo)
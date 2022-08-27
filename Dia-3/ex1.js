/* Site de conteúdo adulto. Imagina que estamos trabalhando para um site de conteúdo adulto,
quando carregamos a página n´s verificamos a idade do usuário logado e se essa idade for menor
de 18 anos nós mostraremos a mensagem: Conteúdo proibido para menores.*/

let nome = "Paulinho"
let idade = 20

if  (idade >= 18)   {
    console.log(nome + " pode entrar na página.")
} else {
    console.log(nome + " não insista meu amigo. Acesso proibido")
}
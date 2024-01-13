// Função do Hello World
function helloWorld() {
    alert("Hello World!");
}
//varivavel nome recebe o elemento com id nome
let nomeUsuario = document.getElementById("nome");
// let nome = <input id="nome" type="text"  name="nome" />

function enviar() {
    alert("Olá  " + nomeUsuario.value);
}


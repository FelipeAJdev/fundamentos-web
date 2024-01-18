let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Nome: " + nome.value);
    console.log("Email: " + email.value);
    console.log("Mensagem: " + mensagem.value);
});

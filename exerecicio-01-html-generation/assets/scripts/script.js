let nome = window.Document.getElementById("nome");
let email = window.Document.getElementById("email");
let mensagem = window.Document.getElementById("mensagem");
let btnEnviar = window.Document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Nome: " + nome.value);
    console.log("Email: " + email.value);
    console.log("Mensagem: " + mensagem.value);
}); 
var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome")
var saida = document.getElementById("saida-de-dados")
var email = document.getElementById("email")
var telefone = document.getElementById("telefone")
var CEP = document.getElementById("CEP")
var logradouro = document.getElementById("logradouro")
var número = document.getElementById("número")
var complemento = document.getElementById("complemento")
var bairro = document.getElementById("bairro")
var cidade = document.getElementById("cidade")
var estado = document.getElementById("estado")

function alertar (){
     //alert("O nome inserido foi" + nome.velue);
     saida.innerText= "Nome:" + nome.value +
           "\n E-mail: " + email.value +
           "\n Telefone" + telefone.value +
           "\n CEP" + CEP.valeu +
           "\n logradura" + logradura.value ;
           
}

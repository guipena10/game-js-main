alert("Boas vindas ao nosso site!");
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
nome = prompt('Qual nome do usuário?');
idade = prompt('Quantos anos você tem?');

if (idade >= 18) {

    alert("Pode tirar a habilitação");
}
else { 
     
    alert ("Voce ainda não pode dirigir");
}
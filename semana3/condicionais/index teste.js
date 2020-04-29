

/* ----- EXERCÍCIO 1 ----- */
const respostaDoUsuario = prompt("Qual o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
/* 
O código acima solicita um número ao usuário, este número será dividido por 2 e o resto da divisão será o número utilizado na próxima operação X === 0. Caso o resultado seja igual a 0, imprimirá na tela "Passou no teste", caso contrário impimirá na tela "Não passou no teste"



 ----- EXERCÍCIO 2 ----- 
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    ; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a. O código acima serve para retornar ao usuário o valor de uma fruta que ele mesmo digitará seu nome. Caso o nome digitado não esteja dentre as opções dadas no switch, o retorno será 5.
b. O preço da fruta Maçã é R$ 2.25
c.  2 laranjas = 7
    1 maçã = 2.25
    3 bananas = 15
    1 uva = 0.30
    Total = R$ 24.55
d. Uncaunght SyntaxError: Invalid or unexpected token


 ----- EXERCÍCIO 3 ----- 
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número.")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)*/

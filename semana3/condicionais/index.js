

// ----- EXERCÍCIO 1 ----- 
/*
const respostaDoUsuario = prompt("Qual o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//O código acima solicita um número ao usuário, este número será dividido por 2 e o resto da divisão será o número utilizado na próxima operação X === 0. Caso o resultado seja igual a 0, imprimirá na tela "Passou no teste", caso contrário impimirá na tela "Não passou no teste"



//----- EXERCÍCIO 2 ----- 
/*
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
*/
 
//a. O código acima serve para retornar ao usuário o valor de uma fruta que ele mesmo digitará seu nome. Caso o nome digitado não esteja dentre as opções dadas no switch, o retorno será 5.
//b. O preço da fruta Maçã é R$ 2.25
//c.  2 laranjas = 7    1 maçã = 2.25    3 bananas = 15    1 uva = 0.30    Total = R$ 24.55
//d. Uncaunght SyntaxError: Invalid or unexpected token


// ----- EXERCÍCIO 3 ----- 
/*
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

console.log(mensagem)
*/

//A mensagem que aparece é de erro: Uncaunght SyntaxError: Invalid or unexpected token.O problema nesse código é que existe um escopo onde a variável que retorna ao usuário não pode ser acessada pelo bloco pai.


// ----- EXERCÍCIO 4 ----- 


//a. Nesse caso abaixo, não há informação relatada no console para números iguais informados pelo usuário.
/*
let numeroI = prompt("Digite o primeiro número")
let numeroII = prompt("Digite o segundo número")

numeroI = Number(numeroI)
numeroII = Number(numeroII)

if (numeroI > numeroII) {
    console.log("Ordem descrescente", numeroI, "e", numeroII)
}

if (numeroI < numeroII) {
    console.log("Ordem descrescente", numeroII, "e", numeroI)
}
*/

//b. Nesse caso abaixo, não há informação relatada no console para números iguais informados pelo usuário.
/*
let numeroI = prompt("Digite o primeiro número")
let numeroII = prompt("Digite o segundo número")
let numeroIII = prompt("Digite o terceiro número")

numeroI = Number(numeroI)
numeroII = Number(numeroII)
numeroIII = Number(numeroIII)

if (numeroI < numeroII && numeroII < numeroIII) {
    console.log("Ordem descrescente 1:", numeroIII, "e", numeroII, "e", numeroI)
}// Para o caso 5 10 15 

if (numeroI < numeroII && numeroI < numeroIII) {
    console.log("Ordem descrescente 2:", numeroII, "e", numeroIII, "e", numeroI)
}// Para o caso 5 15 10 

if (numeroI < numeroII && numeroI > numeroIII) {
    console.log("Ordem descrescente 3:", numeroII, "e", numeroI, "e", numeroIII)
}// Para o caso 10 15 5

if (numeroIII > numeroI && numeroIII < numeroI) {
    console.log("Ordem descrescente 4:", numeroIII, "e", numeroI, "e", numeroII)
}// Para o caso 10 5 15

if (numeroI > numeroII && numeroIII > numeroII) {
    console.log("Ordem descrescente 5:", numeroI, "e", numeroIII, "e", numeroII)
}// Para o caso 15 5 10

if (numeroII > numeroIII && numeroIII < numeroII) {
    console.log("Ordem descrescente 6:", numeroI, "e", numeroII, "e", numeroIII)
}// Para o caso 15 10 5

// c. 
if (numeroI === numeroII && numeroI === numeroIII && numeroII === numeroIII){
    console.log("Digite pelo menos um número diferente!")
}
*/

// ----- EXERCÍCIO 5 -----
// a. https://drive.google.com/open?id=1sfskKuUHsJzvdYPPuNPMhNHSRjxor-dX

//b. to tentando ainda

let osso = prompt("O animal possui ossos ?")

if (osso === "sim") {
  console.log("É vertebrado!")
  
  let pelos = prompt("Possui pêlos ?")
  if (pelos === "sim"){
    console.log("Possui pêlos!")

      let racional = prompt("Ele é racional ?")
      if (racional === "sim"){
      console.log("É humano!")
      alert("É um humano!")
    } else {
      console.log("É mamífero!")
      alert("É um mamífero!")
    }

  } else if (pelos !== "sim"){
      let penas = prompt("Possui penas?")
      if (penas === "sim"){
      console.log("É uma ave!")
      alert("É uma ave!")
    } else {
      let terrestre = prompt("Ele é terrestre?")
      if (terrestre !== "sim"){
      console.log("É peixe!")
      alert("É um peixe!")

  } else if (terrestre === "sim"){
    let vidaAgua = prompt("Ele vive parte de sua vida na água?")
    if (vidaAgua === "sim"){
    console.log("É anfíbio!")
    alert("É um anfíbio!")
    } else if (vidaAgua !== "sim"){
      console.log("É réptil!")
      alert("É um réptil!")
    }
  }
 
   }
  }
 }else if (osso !== "sim"){
  console.log("É invertebrado!")
  alert("É invertebrado!")
}
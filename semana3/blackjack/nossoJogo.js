/* 

//EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
console.log("Bem vindo ao jogo de Blackjack!")

const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

let pontuacaoU = 0
const primeiraCartaU = comprarCarta () // comprar primeira carta para usuário
pontuacaoU.texto += primeiraCartaU.valor // primeira carta e seu valor juntos

const segundaCartaU = comprarCarta () // comprar segunda carta para usuário
pontuacaoU.texto += segundaCartaU.valor // segunda carta e seu valor juntos

valorU = primeiraCartaU.valor + segundaCartaU.valor // soma da primeira carta com a segunda do usuário
//======================================================

let pontuacaoC = 0
const primeiraCartaC = comprarCarta () // comprar primeira carta para computador
pontuacaoC.texto += primeiraCartaC.valor // carta e seu valor juntos

const segundaCartaC = comprarCarta () // comprar segunda carta para computador
pontuacaoC.texto += segundaCartaC.valor // segunda carta e seu valor juntos

valorC = primeiraCartaC.valor + segundaCartaC.valor // soma da primeira carta com a segunda do computador
//======================================================

if (confirm("Quer iniciar uma nova rodada?")) { // confirm para dar ao usuário duas opções, caso ele aceite:
   console.log(`Usuário - cartas: ${primeiraCartaU.texto} ${segundaCartaU.texto} - Pontuação ${valorU}`) // mostrar no console quais cartas e a soma delas (ambos para o usuário)
   console.log(`Computador - cartas: ${primeiraCartaC.texto} ${segundaCartaC.texto} - Pontuação ${valorC}`) // mostrar no console quais cartas e a soma delas (ambos para o usuário)

} else { // caso o usuário não aceite:
   alert("O jogo acabou!") // aviso na tela de que o jogo acabou
   console.log("O jogo acabou!") // print no console que o jogo acabou
}
//======================================================
if (valorU === valorC){ // somas de valores iguais:
   console.log("Empate!")// print no console que o jogo empatou
}
if (valorU > valorC && valorU <= 21) { // se a soma dos valores do usuário for maior que a do computador E menor ou igual a 21, o usuário ganha
   console.log("O usuário venceu!")
}
if (valorC > valorU && valorC <= 21){// se a soma dos valores do computador for maior que a do usuário E menor ou igual a 21, o computador ganha
   console.log("O computador venceu!")
}
if (valorU > 21 && valorC > 21) // se ambos valores forem maiores que 21, ambos perdem
   console.log("Ninguém ganhou! Recomece o jogo!")
*/
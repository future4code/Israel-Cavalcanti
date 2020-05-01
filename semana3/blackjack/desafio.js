/*
EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
*/

let pontuacaoU = 0
const primeiraCartaU = comprarCarta () // comprar primeira carta para usuário
pontuacaoU.texto += primeiraCartaU.valor // primeira carta e seu valor juntos

const segundaCartaU = comprarCarta () // comprar segunda carta para usuário
pontuacaoU.texto += segundaCartaU.valor // segunda carta e seu valor juntos

valorU = primeiraCartaU.valor + segundaCartaU.valor // soma da primeira carta com a segunda do usuário
cartasU = (`${primeiraCartaU.texto} e ${segundaCartaU.texto}`)

// ====================================================
let pontuacaoC = 0
const primeiraCartaC = comprarCarta () // comprar primeira carta para computador
pontuacaoC.texto += primeiraCartaC.valor // carta e seu valor juntos

const segundaCartaC = comprarCarta () // comprar segunda carta para computador
pontuacaoC.texto += segundaCartaC.valor // segunda carta e seu valor juntos

valorC = primeiraCartaC.valor + segundaCartaC.valor // soma da primeira carta com a segunda do computador
cartasC = (`${primeiraCartaC.texto} e ${segundaCartaU.texto}`)

// ====================================================
let pontuacaoUcompra1 = 0
const terceiraCartaU = comprarCarta() // comprar terceira carta para usuário
pontuacaoUcompra1.texto += terceiraCartaU.valor // carta e seu valor juntos

valorUcompra1 = valorU + terceiraCartaU.valor // soma as duas primeiras com a terceia carta
cartasU1 =(`${cartasU} e ${terceiraCartaU.texto}`) // variavel de texto para as 3 cartas

let pontuacaoUcompra2 = 0
const quartaCartaU = comprarCarta() // comprar quarta carta para usuário
pontuacaoUcompra2.texto += quartaCartaU.valor // carta e seu valor juntos

valorUcompra2 = valorUcompra1 + quartaCartaU.valor // soma as tres primeiras com a quarta carta
cartasU2 = (`${cartasU1} e ${quartaCartaU.texto}`) // variavel de texto para as 4 cartas

// ======================= Início de jogo!

console.log("Seja bem-vindo ao desafio de Blackjack !\n ")

if (confirm("Seja bem-vindo ao desafio de Blackjack!\nQuer iniciar uma nova rodada?")) {

   console.log(`Cartas do usuário: ${cartasU} - Pontuação = ${valorU}`)
   console.log(`A carta revelada do computador é: ${primeiraCartaC.texto}\n `)

   if (confirm(`Suas cartas são ${cartasU}. A carta revelada do computador é ${primeiraCartaC.texto}.\nSua pontuação atual é de ${valorU} pontos!\nDeseja comprar mais uma carta?`)){
      
      console.log(`O usuário comprou a primeira carta: ${terceiraCartaU.texto}\n `)
      console.log(`Agora as cartas do usuário são: ${cartasU1} e sua pontuação agora é: ${valorUcompra1}`)
      console.log(`Cartas do computador: ${cartasC}. Pontuação: ${valorC}\n `)
      
      alert(`Sua nova carta é ${terceiraCartaU.texto}!`)

      // ======================= O usuário aceitou comprar a primeira carta!

      if (valorUcompra1 > 21){
         console.log(`O usuário comprou uma carta e estourou com ${valorUcompra1}`)
         alert(`Que pena, você estourou com ${valorUcompra1} pontos.\nSuas cartas foram: ${cartasU1}`)
      }
   
      if (valorUcompra1 <= 21){
         if (confirm(`Suas cartas agora são: ${cartasU1}.\nA carta revelada do computador ainda é ${primeiraCartaC.texto}.\nSua pontuação agora é de ${valorUcompra1} pontos.\nDeseja comprar mais uma carta por conta e risco?`)){

            console.log(`O usuário comprou a segunda carta: ${quartaCartaU}\n `)
            console.log(`Agora as cartas do usuário são: ${cartasU2} e sua pontuação é: ${valorUcompra2}`)
            console.log(`Cartas do computador: ${cartasC}. Pontuação: ${valorC}\n`)
            console.log(`A pontuação final do usuário é: ${valorUcompra1}.\nE a pontuação final do computador é: ${valorC}`)

            alert(`Sua nova carta é ${quartaCartaU.texto}!`)

            // ======================= O usuário aceitou comprar a segunda carta!

            if (valorUcompra2 === valorC){ // somas de valores iguais:
               console.log("Empate!")// print no console que o jogo empatou
               alert(`Empate! Tente novamente!\nSuas cartas foram: ${cartasU2} = ${valorUcompra2} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
            }
            if (valorUcompra2 > valorC && valorUcompra2 <= 21) { // se a soma dos valores do usuário for maior que a do computador E menor ou igual a 21, o usuário ganha
               console.log("O usuário venceu!")
               alert(`Parabéns, você venceu!\nSuas cartas foram: ${cartasU2} = ${valorUcompra2} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
            }
            if (valorC > valorUcompra2 && valorC <= 21){// se a soma dos valores do computador for maior que a do usuário E menor ou igual a 21, o computador ganha
               console.log("O computador venceu!")
               alert(`Que pena, o computador venceu! Tente novamente!\nSuas cartas foram: ${cartasU2} = ${valorUcompra2} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
            }
            if (valorUcompra2 > 21 && valorC > 21){ // se ambos valores forem maiores que 21, ambos perdem
               console.log("Ninguém ganhou!")
               alert(`Você e o computador estouraram! Ninguém ganhou!\nSuas cartas foram: ${cartasU2} = ${valorUcompra2} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
            }
            if (valorUcompra2 > 21 && valorC <=21){
               console.log(`O usuário estourou, e o computador venceu com as cartas $ ${cartasC}`)
               alert(`Você estourou!\nSuas cartas foram: ${cartasU2} = ${valorUcompra2} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nTente novamente!`)
            }
            if (valorC > 21 && valorUcompra2 <=21){
               console.log(`O computador estourou, e você venceu com as cartas ${cartasU2}: ${valorUcompra2} pontos.`)
               alert(`O computador estourou e você venceu!\nSuas cartas foram: ${cartasU2} = ${valorUcompra2} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nParabéns!`)
            }

         
         } else{
               if (valorUcompra1 === valorC){ // somas de valores iguais:
                  console.log("Empate!")// print no console que o jogo empatou
                  alert(`Empate!\nSuas cartas foram: ${cartasU1} = ${valorUcompra1} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nTente novamente!`)
               }
               if (valorUcompra1 > valorC && valorUcompra1 <= 21) { // se a soma dos valores do usuário for maior que a do computador E menor ou igual a 21, o usuário ganha
                  console.log("O usuário venceu!")
                  alert(`Parabéns, você venceu!\nSuas cartas foram: ${cartasU1} = ${valorUcompra1} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
               }
               if (valorC > valorUcompra1 && valorC <= 21){// se a soma dos valores do computador for maior que a do usuário E menor ou igual a 21, o computador ganha
                  console.log("O computador venceu!")
                  alert(`Que pena, o computador venceu!\nSuas cartas foram: ${cartasU1} = ${valorUcompra1} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nTente novamente!`)
               }
               if (valorUcompra1 > 21 && valorC > 21){ // se ambos valores forem maiores que 21, ambos perdem
                  console.log("Ninguém ganhou!")
                  alert(`Você e o computador estouraram!\nSuas cartas foram: ${cartasU1} = ${valorUcompra1} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nNinguém ganhou!`)
               }
               if (valorUcompra1 > 21 && valorC <=21){
                  console.log(`O usuário estourou, e o computador venceu com as cartas $ ${cartasC}`)
                  alert(`Você estourou!\nSuas cartas foram: ${cartasU1} = ${valorUcompra1} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nTente novamente!`)
               }
               if (valorC > 21 && valorUcompra1 <=21){
                  console.log(`O computador estourou, e você venceu com as cartas ${cartasU1}: ${valorUcompra1} pontos.`)
                  alert(`O computador estourou e você venceu!\nSuas cartas foram: ${cartasU1} = ${valorUcompra1} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nParabéns, você venceu!`)
               }
            }
      }
   } else {
         console.log(`A pontuação final do usuário é: ${valorU}.\nE a pontuação final do computador é: ${valorC}`)

      if (valorU === valorC){ // somas de valores iguais:
         console.log("Empate!")// print no console que o jogo empatou
         alert(`Empate!\nSuas cartas foram: ${cartasU} = ${valorU} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
      }
      if (valorU > valorC && valorU <= 21) { // se a soma dos valores do usuário for maior que a do computador E menor ou igual a 21, o usuário ganha
         console.log("O usuário venceu!")
         alert(`Parabéns, você venceu!\nSuas cartas foram: ${cartasU} = ${valorU} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
      }
      if (valorC > valorU && valorC <= 21){// se a soma dos valores do computador for maior que a do usuário E menor ou igual a 21, o computador ganha
         console.log("O computador venceu!")
         alert(`Que pena, o computador venceu!\nSuas cartas foram: ${cartasU} = ${valorU} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.`)
      }
      if (valorU > 21 && valorC > 21){ // se ambos valores forem maiores que 21, ambos perdem
         console.log("Ninguém ganhou!")
         alert(`Você e o computador estouraram!\nSuas cartas foram: ${cartasU} = ${valorU} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nNinguém ganhou!`)
      }
      if (valorU > 21 && valorC <=21){
         console.log(`O usuário estourou, e o computador venceu com as cartas $ ${cartasC}`)
         alert(`Você estourou!\nSuas cartas foram: ${cartasU} = ${valorU} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nTente novamente!`)
      }
      if (valorC > 21 && valorU <=21){
         console.log(`O computador estourou, e você venceu com as cartas ${cartasU1}: ${valorUcompra1} pontos`)
         alert(`O computador estourou e você venceu!\nSuas cartas foram: ${cartasU} = ${valorU} pontos.\nAs cartas do computador foram: ${cartasC} = ${valorC} pontos.\nParabéns!`)
      }
   }
   
} else{
   console.log("O usuário desistiu antes de começar!")
   alert("Não quer tentar a sorte?")
}
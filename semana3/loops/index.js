//----------------------EX 1.--------------------
/*let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

// O código acima faz com que o laço adicione 1 em i acada loop, e cada novo valor de i é adicionado à variavel sum até que i atinja seu valor < 15. Rodando o código, o valor final será a soma de 91 (sum) com 14 (i) já que i tem que ser < que 15.


//----------------------EX 2.--------------------
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 4

for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//a. O comando push permite receber determinados elementos de um array
//b. (4) [10, 15, 25, 30]
//c. (numero = 3) - (6) [12, 15, 18, 27, 30] E (numero = 4) (3) [12]

//----------------------DESAFIO 1--------------------

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0

while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

/*
O resultado seria:
L1: 0
L2: 00
L3: 000
L4: 0000

Isso acontece pois a quantidade digitada pelo usuário indica ao código quantas vezes ele rodará e mostrará no console 0 + 1 por linha.
*/

//----------------------EX 3.--------------------*/

const conjunto = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
/*
//Resposta item a. "O maior número é 130 e o menor é 21"
let maxAtual = conjunto[0]
for(let maiorNum = 0; maiorNum < conjunto.length; maiorNum++) {
    if (conjunto [maiorNum] > maxAtual){
        maxAtual = conjunto [maiorNum]
    }
}
console.log(maxAtual)

let minAtual = conjunto [0]
for(let menorNum = 0; menorNum < conjunto.length; menorNum++) {
    if(conjunto [menorNum] < minAtual) {
        minAtual = conjunto [menorNum]
    }
}
console.log(minAtual)
console.log("O maior número é", maxAtual, "e o menor é", minAtual)
*/

//Resposta item b. [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]
let conjunto2 = []

for (let xx = 0; xx < conjunto.length; xx++) {
    conjunto2.push(conjunto[xx]/10)
}
console.log(conjunto2)

// ------------------------OU-----------------------
let conjunto2a = []

for (let xx of conjunto) {
    conjunto2a.push(xx/10)
}
console.log(conjunto2a)

//Resposta item c. [80, 30, 130, 40, 60, 70, 120, 90, 110]
let conjunto3 = []

for (let yy of conjunto) {
    if (yy % 2 === 0)
    conjunto3.push(yy)
}
console.log(conjunto3)

// Resposta item d.
/*[ 'O elemento do índex 0 é 80',
  'O elemento do índex 1 é 30',
  ...*/

  let conjunto4 = []
  
  for (let i = 0; i < conjunto.length; i++){
    conjunto4.push(`O elemento do índex ${i} é ${conjunto[i]}`)
  }

  console.log(conjunto4)

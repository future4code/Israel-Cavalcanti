// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
/*1. O código possui uma função 'conversorDeMoeda' onde o usuário insere um número referente á cotação do dólar em um prompt na tela, esse valor é guardado na variável 'cotacao'. 
A função possui um 'return'que retornará o 'R$' e valor de 'cotacao' multiplicado pela variavel 'valorEmDolar' que é inserida na funcão ao ser invocada pela variável 'meuDinheiro'.
No caso, o valor inserido nessa variável é 100. Por fim é impresso no console o valor da variavel 'meuDinheiro': 100 * (valor a ser inserido pelo usuário).
*/


/*2.O código possui uma função 'investeDinheiro', dentro dela, uma variável 'valorAposInvestimento' e um 'switch' tipoDeInvestimento' onde estão listados algumas opções de tipo de investimento com um valor predeterminado para cada caso. 
Se o usuário informar um tipo diferente das opções listadas, um alert é acionado informando "Tipo de investimento informado incorreto!".
A função retorna com o return o valor da variável 'valorAposInvestimento'.
Fora da função há duas variáveis que invocam a função acima:
I. 'novoMontante' busca dentro do switch a palavra "Ações" e insere o número 150. "Ações" é encontrado e aplica o número inserido em 'valor': 150 * 1.1. O resultado é retornado no return: 165.
II. 'segundoMontante' busca dentro do switch a "Tesouro Direto" e insere o número 200. "Tesouro Direto" não é encontrado e retorna o alert.

No console é impresso:
165
TIPO DE INVESITMENTO INFORMADO INCORRETO!
*/

/*3. O código possui 3 arrays: numeros (prrenchido), array1 e array2 (ambos vazios).
Um 'for' faz um loop para o código rodar: a variável 'numero' será um valor de dentro do array 'numeros' que SE (if) for um número que dividido por 2 tenha resto 0 (numero % 2 === 0), será inserido no 'array1' (array1.push(numero)), caso não respeite essa regra, irá para o 'array2'.

No console é impresso:
Quantidade total de números 14
6
8
*/

/*4. O código possui um array 'numeros' e duas variáveis: 'numero1' que recebe Infinity e 'numero2' que recebe 0.
Novamente um 'for' realiza um loop para o código rodar: a variável 'numero' será um valor de dentro do array 'numeros' que SE (if) for menor que Infinity (infinito) alterará o valor da variável 'numero1' inserindo nela o menor número do array. 
E SE (if) esse valor for maior que 'numero2' alterará o valor da variável 'numero2' inserindo nela o maior número do array.

No console é impresso:
-10
1590
*/

// =========================================================

// EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO
//1. Para percorrer uma lista bem como iterá-la, podemos criar um array:


let alimentos = ["Lasanha", "Pudim", "Pizza", "Sorvete", "Pão-de-queijo"]

alimentos.push("Torta-de-limão") // Adiciona ao array 'alimentos' o valor "Torta-de-limão"
console.log(alimentos) // Imprime no console toda a lista do array 'alimentos'
console.log(alimentos[0]) // Ao alterar o número dentro do [], podemos poercorrer os valores dentro do array 'alimentos'
console.log(alimentos.length) // Imprime no console a quantidade de itens dentro do array 'alimentos'

// 2.
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 // True
const booleano4 = !booleano3 // False
/*
a) `booleano1 && booleano2 && !booleano4` === FALSE
    (T && F && T) = FALSE

b) `(booleano1 && booleano2) || !booleano3` === TRUE
    (T && F) = F
    F || T = TRUE

c) `(booleano2 || booleano3) && (booleano4 || booleano1)` === TRUE
    (F || T) = T
    (F || T) = T
    T && T = TRUE

d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` === TRUE
    (F && T) = F -> !F = T
    (T || F) = T -> !T = F
    T || F = T

e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` === TRUE
    !(T) = F
    !(T) = F
    F && F = T
    (T && T && T) = T
    T || T = TRUE
*/

//3. O código da forma que está não funciona como o exercício solicita. Da forma que está o código é um loop infinito. O código para funcionar corretamente necessita de:
/*
i. Adicionar um número à variável quantidadeDeNumerosPares;
ii. Remover o sinal '=' da condição do while;
iii. Acrescentar um incremento para adicionar 1 a cada loop que o código rodar.
*/

const quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
    console.log(i*2)
    i++
}

//4. Equilátero = 3L iguais --- Isósceles = 2L iguais --- Escaleno = 3L!

let ladoA = 1
let ladoB = 3
let ladoC = 4

if(ladoA === ladoB && ladoB === ladoC){
    console.log("Equilátero")
} 
    else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    console.log("Escaleno")
} 
    else{
    console.log("Isósceles")
}

//5. 

let num1 = 4
let num2 = 2

if(num1 > num2){
    console.log(`O maior é: ${num1}`)
}else{
    console.log(`O maior é: ${num2}`)
}

if(num1 % num2 === 0){
    console.log(`${num1} é divisível por ${num2}`)
    console.log(`${num2} não é divisível por ${num1}`)
}
    else if(num2 % num1 === 0){
        console.log(`${num2} é divisível por ${num1}`)
        console.log(`${num1} não é divisível por ${num2}`)
}

if(num1 > num2){
    diferenca = num1 - num2
    console.log(`A diferença entre eles é: ${diferenca}`)
}
    else if(num1 < num2){
        diferenca = num2 - num1
        console.log(`A diferença entre eles é: ${diferenca}`)
}

// =========================================================

// EXERCICIOS DE FUNÇÕES

//1.
let array = [1, 300, 2, 100, 20, 3, 10, 200, 30]
console.log(`Este é o array: ${array}`)

array.sort(function(num1, num2){
    return num1 - num2
})

let menorNum = array [1]
console.log(`O segundo menor número é ${menorNum}`)

let maiorNum = array[array.length -2]
console.log(`O segundo maior número é ${maiorNum}`)

//2.
let alerta = function(){
    return alert("Hello Labenu!")
}

alerta()

// =========================================================

// EXERCICIOS DE OBJETOS
//1. Objetos é uma forma de organizar várias variáveis em apenas um lugar. Como uma gaveta para guardar as roupas. Devemos utilizar eles na criação de determinadas características de uma mesma coisa (informações sobre uma pessoa por exemplo). Podemos utilizar os objetos para iterar arrays, e com eles acessar, modificar e adicionar novas informações.

//2.
function criaRetangulo (lado1, lado2){
    
    objeto = {
        largura: lado1,
        altura: lado2,
        perimetro: (lado1 + lado2) * 2,
        area: lado1*lado2
    }
    return console.log(`Um lado mede ${objeto.largura} e o outro ${objeto.altura}. O perímetro vale ${objeto.perimetro} e a área ${objeto.area}`)
}

criaRetangulo(5, 3)

//3.
filmeFav = {
    titulo: 'Jurassic Park',
    ano: 1992,
    diretor: 'Steven Spielberg',
    atores: ['Jeff Goldblum ','Laura Dern ','Sam Neill']
}

console.log(`Venha assistir ao filme ${filmeFav.titulo}, de ${filmeFav.ano}, dirigido por ${filmeFav.diretor} e estrelado pelos atores ${filmeFav.atores}.`)

//4.
let infoPessoa = {
    nome: 'Israel Cavalcanti',
    idade: 26,
    email: 'israel_cavalcanti@hotmail.com',
    endereco: 'Rua Rubens Meireles, 105'
}

function anonimizarPessoa(){
    const anonimato ={
        ...infoPessoa,
        nome: 'ANÔNIMO'
    }
    console.log(anonimato)
}

anonimizarPessoa()

// =========================================================

// EXERCICIOS DE FUNÇÕES DE ARRAY
//1.
const objetoEx1 = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a.
const apenasAdultos = objetoEx1.filter((elementoMaior) => {
        if(elementoMaior.idade >= 20){
            return true
        }
        else{
        return false
        }
    }
)
console.log(apenasAdultos)

//b.
const apenasMenores = objetoEx1.filter((elementoMenorVinte) => {
        if(elementoMenorVinte.idade < 20){
            return true
        }
        else {
            return false
        }
    
    }
)
console.log(apenasMenores)

//2.

//a.
let numerosEx2 = [1, 2, 3, 4, 5, 6]
let total = 0
 
function multiplicar(item, index){
    total = item*2
    numerosEx2[index] = total
}
 
numerosEx2.forEach(multiplicar)
console.log(numerosEx2)

//b.
let numerosEx2b = [1, 2, 3, 4, 5, 6]
let totalb = 0
 
function multiplicar3(item, index){
    totalb = (item*3)
    numerosEx2b[index] = totalb 
}

numerosEx2b.map(multiplicar3)

const arrayString = numerosEx2b.map((multiplicar3) => {
    return multiplicar3.toString()
 }
)
console.log(arrayString)

//c.
let numerosEx2c = [1, 2, 3, 4, 5, 6]

const arrayParImpar = numerosEx2c.map((item) => {
    if(item % 2 === 0){
        return `${item} é par`
       } 
       else{
        return `${item} é impar`
       }
 }
)
console.log(arrayParImpar)

//3.
const pessoas3 = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const podeEntrar = pessoas3.filter((condicaoA) => {

    if(condicaoA.altura >= 1.5 && condicaoA.idade > 14 && condicaoA.idade < 60){
        return true
    } else{
        return false
    }
})
console.log(podeEntrar)

const naoPodeEntrar = pessoas3.filter((condicaoB) => {

    if(condicaoB.altura >= 1.5 && condicaoB.idade > 14 && condicaoB.idade < 60){
        return false
    } else{
        return true
    }
})
console.log(naoPodeEntrar)

//.4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function gerarEmail(paciente){
   let tratamento
   let lembrar
   return consultas.map((paciente) => {
       if(paciente.genero === 'masculino'){
        tratamento = 'Sr.'
        lembrar = 'lembrá-lo'
       }else{
        tratamento = 'Sra.'
        lembrar = 'lembrá-la'
       }

            if(paciente.cancelada === true){
            return (`Olá, ${tratamento} ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)

             }else {
            return (`Olá, ${tratamento} ${paciente.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
            }
    })
}
console.log(gerarEmail(consultas))
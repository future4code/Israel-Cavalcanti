/*----------------------EX 1.--------------------*/
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
/* false */

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
/* false */

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
/* true */

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
/* false */

console.log("e. ", typeof resultado)
/* boolean */




/*----------------------EX 2.--------------------*/
let array
console.log('I. ', array)
/* undefined */

array = null
console.log('II. ', array)
/* null */

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
/* 11 */

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
/* 3 e 4*/

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
/* 19 e 9 */

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
/* 3 */

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
/* 1 */

/*
a. O que é `array` e como se declara em `JS`? 
- Array é uma matriz de elementos e que no JS serve para selecionar um elemento dentro de um conjunto.

b. Qual o index inicial de um `array`? 
- let array.

c. Como se determinar o tamanho do `array`?
array.length

d. Indique todas as mensagens impressas no console.

*/





/* Exercício 1. de escrita de código */

/*  const KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
    const GRAUS_FAHRENHEIT = (GRAUS_CELSIUS)*9/5 + 32 */


let FAHRENHEIT = 77
let KELVIN = (FAHRENHEIT - 32)*5/9 + 273.15
console.log ("a.", KELVIN, "K")

let CELSIUS = 80
FAHRENHEIT = (CELSIUS)*9/5 + 32
console.log ("b.", FAHRENHEIT, "C")

CELSIUS = 30
FAHRENHEIT = (CELSIUS)*9/5 + 32
console.log ("c I.", FAHRENHEIT, "F")

CELSIUS = 30
let KELVIN_CELSIUS = (CELSIUS) + 273.15
console.log ("c II.", KELVIN_CELSIUS, "K")

/* Exercício 2. de escrita de código */

const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual a sua idade?")
const ano = prompt ("Em que ano nasceu?")
const cidade = prompt("Em qual cidade você mora?")
const time = prompt("Para qual time você torce?")*/


/* Exercício 3. de escrita de código */


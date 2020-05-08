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

console.log(alimentos) // Imprime no console toda a lista do array 'alimentos'
console.log(alimentos[0]) // Ao alterar o número dentro do [], podemos poercorrer os valores dentro do array 'alimentos'
console.log(alimentos.push("Torta-de-limão")) // Adiciona ao array 'alimentos' o valor "Torta-de-limão"
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
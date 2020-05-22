// ======= EXERCICIO 1 =======

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

//a. reultado = [] (Vazio pois i começa como 0 e j precisa necessariamente ser menor que i, j também começa como 0, e 0 não é menor que 0)
console.log(minhaFuncao(2))

//b. resultado = (6) [0, 1, 0, 2, 3] 
/*
(i=0 / j=0 0<0 = array 0)
(i=2 / j=1 1<2 = array 1) Recomeça denovo(2<2);
(i=4 / j=0 0<4 = array 0)
(i=4 / j=1 1<4 = array 1)
(i=4 / j=2 2<4 = array 2)
(i=4 / j=3 3<4 = array 3) Recomeça denovo(4<4);
(Mas agora o próximo valor de i é 5, e o limite da variavel é 5, logo não finaliza o código)
*/
console.log(minhaFuncao(5))

//c. resultado = (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
/*
(i=0 / j=0 0<0 = array 0)
(i=2 / j=1 1<0 = araay 1) Recomeça denovo (2<2);
(i=4 / j=0 0<4 = array 0)
(i=4 / j=1 1<4 = array 1)
(i=4 / j=2 2<4 = array 2)
(i=4 / j=3 3<4 = array 3) Recomeça denovo(4<4);
(i=6 / j=0 0<6 = array 0)
(i=6 / j=1 1<6 = array 1)
(i=6 / j=2 2<6 = array 2)
(i=6 / j=3 3<6 = array 3)
(i=6 / j=4 4<6 = array 4)
(i=6 / j=5 5<6 = array 5) Recomeça denovo(6<6);
(Mas agora o próximo valor de i é 8, e o limite da variavel é 8, logo não finaliza o código)
*/
console.log(minhaFuncao(8))


// ======= EXERCICIO 2 =======
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

//a. As saídas no console são 0, 2 e undefined (Indicando a posição de Darvas, João e Paula(que não existe))

//b. Trocando os valores dos nomes por números o resultado é o mesmo, como visto a baixo:

let arrayDeNum = [5, 10, 15, 20, 25];

const funcao2 = (lista, nome) => {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === nome) {
        return i;
      }
    }
  };
  
  console.log(funcao2(arrayDeNum, 5));
  console.log(funcao2(arrayDeNum, 15));
  console.log(funcao2(arrayDeNum, 50));

// ======= EXERCICIO 3 =======
// O código abaixo em resultadoA soma os dois valores do array (10+15) e em resultadoB multiplica os dois valores do array (10*15) e retorna no console os resultados [25, 150]

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }
  
  console.log(metodo(array = [10, 15]))

  // Uma forma de simplificar esse código seria:
function somEdiv (a, b){
    const soma1 = a + b
    const div1 = a * b
    
    return `${soma1}, ${div1}`
}
console.log(somEdiv(10, 15))


// ======= EXERCICIO 4 =======
//a.
function idadeCao (idade){
    const multiplicado = idade * 7
    return multiplicado
}
console.log(idadeCao(4)) // Ao alterar o valor nessa linha, descobre-se a idade humana do cão

//b.
function infos(nome, idade, endereço, estudante){
    if (estudante === "sim"){
        estudante = "sou"
    } else{
        estudante = "não sou"
    }
    
    return `Eu sou ${nome}, tenho ${idade} anos, moro na ${endereço} e ${estudante} estudante`
    
}
console.log(infos("Israel", 25, "Barra funda-SP", "sim"))

// ======= EXERCICIO 5 =======
function qualSeculo(ano){
 
    if(ano >= 1100 && ano <= 1101){
        século = "XI"
    }

    return `O ano ${ano} pertence ao século ${século}`
}
    
console.log(qualSeculo(1150))
/* 
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
*/

// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros.

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas

type dadosEstatisticas = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): dadosEstatisticas {
  const numerosOrdenados: number[] = numeros.sort(
    (a: number, b: number) => a - b
  );

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type amostras = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => dadosEstatisticas;
};

const amostraDeIdades: amostras = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros) => obterEstatisticas(numeros),
};

console.log(amostraDeIdades);

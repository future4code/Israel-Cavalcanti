// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 15

// A variável não aceita o valor numérico, pois foi definida como string e deveria ser number.

//=============================================================

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

// const meuNumero: number = 15

// Para fazer a variável acima aceitar numbers e strings:

// const meuNumero: number | string = "texto" // ou 15

//=============================================================

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

nome, que é uma string;
idade, que é um número;
corFavorita, que é uma string.

Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para que ele só aceite os valores acima.
*/
/*
type pessoa = {
    nome: string;
    idade: number;
    corFavorita: string;
}
*/

//=============================================================
// d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

/*
type pessoa1 = {
    nome: string;
    idade: number;
    corFavorita: string;
}
type pessoa2 = {
    nome: string;
    idade: number;
    corFavorita: string;
}
type pessoa3 = {
    nome: string;
    idade: number;
    corFavorita: string;
}
*/

//=============================================================
// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

/*
enum CORFAVORITA {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  VIOLETA = "Violeta",
}

type pessoa1 = {
  nome: string;
  idade: number;
  corFavorita: CORFAVORITA.VERDE;
};

type pessoa2 = {
  nome: string;
  idade: number;
  corFavorita: CORFAVORITA.AMARELO;
};

type pessoa3 = {
  nome: string;
  idade: number;
  corFavorita: CORFAVORITA.AZUL;
};
*/

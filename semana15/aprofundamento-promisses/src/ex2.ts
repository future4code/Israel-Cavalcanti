import axios from "axios";

// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 utilizando arrow function.

// a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona
// -- ARROW FUNCTION NÃO PRECISA DO TERMO "FUNCTION" E O ASYNC VIRÁ LOGO APÓS O NOME DA FUNÇÃO: const nomeFuncao = async() => { }

// b. Implemente a função solicitada, usando arrow function

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const getSubscribers = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};

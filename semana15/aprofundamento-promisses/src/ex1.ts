import axios from "axios";
// Vamos começar fazendo uma função nomeada simples que retorne todos os assinantes da nossa aplicação. Ela deve ser assíncrona, porque utiliza o async para fazer a comunicação com o banco de dados. Além disso, por ora, inidique que ela vai retornar um array de "qualquer coisa".

// a. Qual endpoint você deve utilizar para isso?
// -- ENDPOINT GET SUBSCRIBERS/ALL

// b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// -- : PROMISE<ANY[]>

// c. Implemente uma função nomeada que faça o que foi pedido.
// --

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
async function getSubscribers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
}

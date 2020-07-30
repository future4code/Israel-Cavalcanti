import axios from "axios";
import { basename } from "path";

// Vamos continuar as nossas funcionalidades da API. Crie uma função que permita criar uma nova notícia.

// a. Qual é o tipo dessa função? Por quê?
// -- FUNÇÃO SÍNCRONA

// b. Implemente a função solicitada

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date,
  });
}

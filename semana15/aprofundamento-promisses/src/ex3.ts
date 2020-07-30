import axios from "axios";

// Agora, vamos melhorar um pouco a nossa função, criando uma tipagem que represente os assinantes da nossa aplicação. No nosso caso, eles possuem um id, name e email, como indicado abaixo:

type User = {
  id: string;
  name: string;
  email: string;
};

// a. Se apenas trocarmos o retorno da função para: Promise<User[]> , teremos algum erro de tipagem?
// -- NÃO, POIS JÁ CRIAMOS A TIPAGEM "User"

// b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
// -- É NECESSÁRIO FAZER O MAPEAMENTO DO RESULTADO DE UMA PROMISE, POIS PRECISAMOS ESTRUTURAR O RESULTADO RETORNADO DA FORMA COMO O ESPERAMOS RECEBÊ-LO.

// c. Reimplemente a função, corretamente.

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const getSubscribers = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

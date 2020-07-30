import axios from "axios";

// Vamos reescrever a função anterior utilizando o Promise.all. Antes disso, responda as perguntas abaixo:

// a. O que o Promise.all faz?
// -- ELE AJUDA A RELIZAR A RESPOSTA DA API DE UMA SÓ VEZ.

// b. Quais as vantagens de se utilizar o Promise.all no caso de se enviar as notificações para todos os usuários?
// -- RECEBENDO UM ARRAY DE PROMISES, DEPOIS DA RESPOSTA, TEREMOS UM ARRAY COM CADA UMA DAS RESPOSTAS DESSAS PROMISES. ASSIM, AS NOTIFICAÇÕES PODERÃO SER ENVIADAS PARALELAMENTE.

// c. Reimplemente a função utilizando Promise.all

type User = {
  id: string;
  name: string;
  email: string;
};

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const sendNotifications = async (
  users: User[],
  message: string
): Promise<void> => {
  const promiseArray = [];
  for (const user of users) {
    promiseArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message: "Todas mensagens enviadas",
      })
    );
  }
  await Promise.all(promiseArray);
};

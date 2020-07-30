import axios from "axios";

// Agora, implemente uma função que receba um array de usuários e uma mensagem e envie essa mensagem como notificação para todos os usuários. A princípio, não utilize o Promise.all

// a. O que aconteceria se fizéssemos a requisição dentro de um forEach? É recomendável utilizá-lo nesse caso?
// -- AO UTILIZAR O FOREACH, FICAR BATENDO MUITAS VEZES NA API CORRE-SE O RISCO DE HAVER ERROS, POR ISSO NÃO É RECOMENDADO.

// b. Implemente a função solicitada

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
  for (const user of users) {
    await axios.post(`${baseUrl}/notifications/send`, {
      subscriberId: user.id,
      message: "Seja bem-vindo!",
    });
  }
  console.log("Todas notificações foram enviadas");
};

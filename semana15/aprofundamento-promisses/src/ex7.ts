import axios from "axios";
import { basename } from "path";

type User = {
  id: string;
  name: string;
  email: string;
};

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

// a. Crie uma função que crie um novo assinante no nosso jornal

const createSubscriber = async (name: string, email: string) => {
  await axios.put(`${baseUrl}/subscribers`, { name, email });
};

// b. Crie uma função que seja responsável pela criação de uma notícia. Só que, dessa vez, além de criar a notícia, ela deve enviar uma notificação para cada um dos usuários

const createAndSendNotifications = async () => {
  try {
    await createNews(
      "Labenu completa 1 ano de vida",
      "Escola de programação é top demais",
      1595522289000
    );

    const users = await getSubscribers();
    await sendNotifications(users, "Tentando enviar mensagem");
  } catch (err) {
    console.log("Erro: ", err.message);
  }
};

// c. Crie uma função que pegue todas as notificações de todos os usuários da aplicação

const getAllNotifications = async (): Promise<any> => {
  const users = await getSubscribers();

  const notificationPromises = [];

  for (const user of users) {
    notificationPromises.push(
      axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
    );
  }

  const result = await Promise.all(notificationPromises);

  const dataFromResult = result.map((res) => res.data);

  return dataFromResult;
};

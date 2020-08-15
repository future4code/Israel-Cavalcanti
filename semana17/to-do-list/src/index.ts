import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/
// ESCONDER AS INFOS SENSÍVEIS
dotenv.config();

/**************************************************************/
// CONEXÃO COM O BD
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/
// ARMAZENAR AS INFOS DO BD:
const app = express();
// CONVERTER AS INFOS HTTP EM JSON:
app.use(express.json());

// PARA FAZER O BD RODAR NO NOSSO SERVIDOR LOCAL:
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/
// FUNÇÃO PARA CRIAR NOVO USUÁRIO
const createUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id,
      name,
      nickname,
      email,
    })
    .into("ToDoListUser");
};

// ENDPOINT PARA CRIAR NOVO USUÁRIO
app.post("/user", async (req: Request, res: Response) => {
  try {
    await createUser(
      req.body.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    );

    res.status(200).send({
      message: "Usuário criado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

/**************************************************************/
// FUNÇÃO PARA PEGAR TODOS USUÁRIOS
const getAllUsers = async (): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM ToDoListUser
  `);
  return result[0];
};

// ENDPOINT PARA VER TODOS USUÁRIOS
app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const result = await getAllUsers();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

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

/****************************** EXERCICIO 1 ********************************/
// FUNÇÃO PARA CRIAR NOVO USUÁRIO
const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  if (
    name.replace(" ", "") &&
    nickname.replace(" ", "") &&
    email.replace(" ", "")
  ) {
    await connection
      .insert({
        name,
        nickname,
        email,
      })
      .into("ToDoListUser");
  } else throw { message: "Verifique se todos os campos foram peenchidos!" };
};

// ENDPOINT PARA CRIAR NOVO USUÁRIO
app.post("/user", async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: "Usuário criado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao criar novo usuário: " + error.message,
    });
  }
});

/****************************** EXERCICIO 2 ********************************/
// FUNÇÃO PARA PEGAR USUÁRIO PELO ID
const getUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM ToDoListUser WHERE id = '${id}'
    `);
    return result[0];
  } catch (error) {
    console.log("Erro ao encontrar id: " + error);
  }
};

// ENDPOINT PARA BUSCAR USUÁRIO PELO ID
app.get("/user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserById(id);

  if (user[0] === undefined) {
    res.status(400).send("Id não encontrado!");
  } else {
    try {
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({
        message: "id não encontrado" + error.message,
      });
    }
  }
});

/****************************** EXERCICIO 3 ********************************/
// FUNÇÃO PARA EDITAR USUÁRIO EXISTENTE
const editUser = async (
  id: string,
  name?: string,
  nickname?: string
): Promise<any> => {
  if (id.replace(" ", "") && (name || nickname)) {
    await connection("ToDoListUser")
      .update({
        nickname: nickname,
        name: name,
      })
      .where({ id });
    console.log(`Usuário atualizado com sucesso!`);
  } else throw { message: "Erro ao atualizar usuário, verifique os dados!" };
};

// ENDPOINT PARA ATUALIZAR USUÁRIO EXISTENTE
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserById(id);
  try {
    await editUser(req.body.id, req.body.name, req.body.nickname);
    res.status(200).send({
      message: "Usuário atualizado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao atualizar usuário: " + error.message,
    });
  }
});

/****************************** EXERCICIO 3 ********************************/
// FUNÇÃO PARA CRIAR TAREFA
const createTask = async (
  userId: string,
  title: string,
  description: string,
  limitDate: Date
): Promise<any> => {
  await connection
    .insert({
      userId,
      title,
      description,
      limitDate,
    })
    .into("ToDoListTask");
};

// ENDPOINT PARA CRIAR NOVA TAREFA
app.post("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.userId,
      req.body.title,
      req.body.description,
      req.body.limitDate
    );
    res.status(200).send({
      message: "Tarefa criada com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao criar nova tarefa: " + error.message,
    });
  }
});

/**************************************************************/
/**************************************************************/
/********************** DESAFIOS ******************************/
/**************************************************************/
/**************************************************************/

/****************************** EXERCICIO 6 ********************************/
// FUNÇÃO PARA PEGAR TODOS USUÁRIOS
const getAllUsers = async (): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM ToDoListUser
    `);
    return result[0];
  } catch (error) {
    console.log("Erro ao buscar todos usuários: " + error);
  }
};

// ENDPOINT PARA VER TODOS USUÁRIOS
app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const result = await getAllUsers();
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send("Erro ao encontrar todos usuários: " + error.message);
  }
});

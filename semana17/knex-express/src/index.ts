import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

// PARA ESCONDER AS INFORMAÇÕES SENSÍVEIS, GUARDAMOS OS VALORES EM UM ARQUIVO ESPARADO PROTEGIDO PELO DOTENV
dotenv.config();

// VARIAVEL PARA UTILIZAR COMO CONEXÃO - podemos deixar essa parte em um arquivo separado!
const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// VAMOS ARMAZENAR A APLICAÇÃO WEB EM UMA VARIÁVEL:
const app = express();
// CONVERTER AS INFOS HTTP EM JSON:
app.use(express.json());

// PARA O BACK-END RODAR NO NOSSO SERVIDOR LOCAL:
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// VAMOS PEGAR AS INFOS DO BANCO DE DADOS DA TABELA ACTOR:
const getActorById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `);
    console.log(result[0][0]);
  } catch (error) {
    console.log(error);
  }
};

// getActorById("001");

// EX 1.b
const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
        `);
    console.log(result[0][0]);
  } catch (error) {
    console.log(error);
  }
};

// getActorByName("Ingrid Guimarães");

// EX 1.c
const getActorByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT COUNT(*) AS Count 
        FROM Actor 
        WHERE gender = '${gender}'
        `);
    console.log(result[0][0].Count);

    const count = result[0][0].Count;

    return count;
  } catch (error) {
    console.log(error);
  }
};

//getActorByGender("female");

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id,
      name,
      salary,
      birth_date: dateOfBirth,
      gender,
    })
    .into("Actor");
};

// EX 2.a
const updateSalaryByIdAndSalary = async (
  id: string,
  salary: number
): Promise<any> => {
  try {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where({ id });
    console.log(`Salário atualizado para ${salary}!`);
  } catch (error) {
    console.log(error);
  }
};

//updateSalaryByIdAndSalary("004", 230000);

// EX 2.b
const deleteActorById = async (id: string): Promise<any> => {
  try {
    await connection("Actor").delete().where({ id });
    console.log("Ator deletado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

//deleteActorById("005");

// EX 2.c
const getAvgByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection("Actor")
      .avg("salary AS Média salarial")
      .where({ gender });

    console.log(result[0]);
  } catch (error) {
    console.log(error);
  }
};

//getAvgByGender("female");
//getAvgByGender("male");

// EX 3
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorByName(id);

    res.status(200).send(actor);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// EX 3.c
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await getActorByGender(req.query.gender as string);

    res.status(200).send({
      quantity: count,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// EX 4

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );
    res.status(200).send();
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// EX 4.a
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalaryByIdAndSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success POST",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//EX 4.b
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActorById(req.params.id);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// EX 5
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id,
      title,
      synopsis,
      release_date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movie");
};

app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.playingLimitDate
    );
    res.status(200).send({
      message: "Sucess POST",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

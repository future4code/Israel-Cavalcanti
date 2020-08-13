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
    return result[0][0];
  } catch (error) {
    console.log(error);
  }
};

// getActorById("001");

// EX 1.b
// FUNÇÃO QUE RECEBE UM NOME E RETORNA UM ATOR COM ESSE NOME:
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
// FUNÇÃO QUE RECEBE UM GÊNERO PARA BUSCAR TODOS ATORES DESSE GÊNERO:
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

//===============================================================

// EX 2
// FUNÇÃO PARA CRIAR UM ATOR:
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
// FUNÇÃO QUE RECEBE ID E SALÁRIO PARA ATUALIZAR O SALÁRIO DO ATOR DESSE ID COM O SALÁRIO INDICADO:
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
// FUNÇÃO QUE RECEBE ID PARA DELETAR O ATOR DESSE ID:
const deleteActorById = async (id: string): Promise<any> => {
  try {
    await connection("Actor").where({ id }).del();
    console.log("Ator deletado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

//deleteActorById("005");

// EX 2.c
// FUNÇÃO QUE RECEBE UM GÊNERO E RETORNA A MÉDIA SALARIAL DESSE GÊNERO:
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

//===============================================================

// EX 3
// ENDPOINT (MÉTODO) PARA BUSCAR ATOR PELO ID - Path Param (passa direto na URL)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
// Exemplo: Passar na URL > 3000/actor/012

// EX 3.c
// ENDPOINT (MÉTODO) PARA BUSCAR ATOR PELO GÊNERO - Query Param
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
//FUNCIONOU NO POSTMAN:
// QUERY PARAMS Exemplos:
/*
1- Ou passa direto na URL > 3000/actor?gender=female
2- Ou adiciona no Query Params KEY = gender & Value = female / male
*/

//===============================================================

// EX 4
// ENDPOINT (MÉTODO) PARA CRIAR UM NOVO ATOR - Body
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.gender
    );
    res.status(200).send({ message: "Actor criado com sucesso!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
// FUNCIONOU NO POSTMAN:
// BODY - RAW - JSON: Exemplo:
/*
{
    "id": "013",
    "name": "Testando o PUT sem 15 (2)",
    "salary": "15",
    "dateOfBirth": "2020-02-22",
    "gender": "female"
}
*/

// EX 4.a
// ENDPOINT (MÉTODO) QUE RECEBE ID E SALÁRIO PARA ATUALIZAR SALÁRIO - Body
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalaryByIdAndSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Salário atualizado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
// FUNCIONOU NO POSTMAN:
// BODY - RAW - JSON: Exemplo:
/*
{
  "id": "013",
  "salary": "15", 
}
*/

//EX 4.b
// ENDPOINT (MÉTODO) QUE RECEBE ID PARA DELETAR ATOR - Path Param (passa direto na URL)
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActorById(req.params.id);
    res.status(200).send({
      message: "Ator deletado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
// Exemplo: Passar na URL > 3000/actor/012

//===============================================================

// EX 5
// FUNÇÃO QUE CRIA UM NOVO FILME:
const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  rating: number,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id,
      title,
      synopsis,
      release_date: releaseDate,
      rating,
      playing_limit_date: playingLimitDate,
    })
    .into("Movies");
};

// ENDPOINT (MÉTODO) PARA CRIAR UM NOVO FILME - Body
app.post("/movie", async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.release_date,
      req.body.rating,
      req.body.playing_limit_date
    );
    res.status(200).send({
      message: "Filme criado com sucesso!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
// FUNCIONOU NO POSTMAN:
// BODY - RAW - JSON: Exemplo:
/*
{
  "id": "013",
  "title": "Novo filme 2020", 
  "synopsis": "Um filme ", 
  "release_date": "2015-05-05",
  "rating": "5", 
  "playing_limit_date": "2020-05-05"
}
*/

//===============================================================

// EX 6
// FUNÇÃO PARA BUSCAR A TABELA DE FILMES COM LIMITE DE 15:
const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
  
  SELECT * FROM Movies LIMIT 15

  `);
  return result[0];
};

// ENDPOINT (MÉTODO) PARA PEGAR OS 15 FILMES - Path Param (passa direto na URL)
app.get("/movie/all", async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
// Passar na URL > 3000/movie/all

//===============================================================

// EX 7
// FUNÇÃO QUE RECEBE UMA QUERY QUE DEVERÁ TER NO TÍTULO OU SINOPSE DO FILME E ORDENA A LISTA DE TABELAS POR ORDEM DE LANÇAMENTO
const searchMovies = async (query: string): Promise<any> => {
  const result = await connection("Movies")
    .where("title", "LIKE", `%${query}%`)
    .orWhere("synopsis", "LIKE", `%${query}%`)
    .orderBy("release_date", "asc");
  return result;
};

// ENDPOINT (MÉTODO) PARA PEGAR OS FILMES DE ACORDO COM O searchMovies - Query Param
app.get("/movie/search", async (req: Request, res: Response) => {
  try {
    const movies = await searchMovies(req.query.query as string);
    res.status(200).send({
      Movies: movies,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});
//FUNCIONOU NO POSTMAN:
// QUERY PARAMS Exemplos:
/*
1- Ou passa direto na URL > 3000/movie/search?query=Dona
2- Ou adiciona no Query Params KEY = query & Value = Dona
*/

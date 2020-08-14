#### Exercicio 1 - KNEX

a) Quando usamos o RAW, a resposta que temos é um objeto que recebemos do banco de dados e devemos tratá-lo, pois a resposta é um array, e queremos apenas uma parte desse array, por isso é utilizado `result[0][0]` que será a posição 0 do array, que está dentro do array na posição 0

b)

```
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

getActorByName("Ingrid Guimarães");
```

c)

```
const getGenderByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
        SELECT COUNT(*) AS Count FROM Actor WHERE gender = '${gender}'
        ORDER BY gender
        `);
    console.log(result[0][0]);
  } catch (error) {
    console.log(error);
  }
};

getGenderByGender("female");
```

#### Exercicio 2 - QUERY BUILDERS

a)

```
const updateSalaryByIdAndSalary = async (
  id: string,
  salary: number
): Promise<any> => {
  try {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
    console.log("sucesso!");
  } catch (error) {
    console.log(error);
  }
};

updateSalaryByIdAndSalary("004", 230000);
```

b)

```
const deleteActorById = async (id: string): Promise<any> => {
  try {
    await connection("Actor").delete().where("id", id);
    console.log("Ator deletado com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

deleteActorById("005");
```

c)

```
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
```

#### Exercicio 3 - CRIANDO ENDPOINT GET

a) Para poder acessar o id que está sendo indicado na URL

b) res.status(200).send(actor) - Define o que será enviado no body como resposta. No caso o que está sendo enviado é o objeto com o conteúdo da tabela Actor;
res.status(400).send - Define o que será enviado como resposta de erro.

c)

```
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
```

#### Exercicio 4 - CRIANDO ENDPOINT PUT

a)

```
app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalaryByIdAndSalary(req.body.id, req.body.salary);
        res.status(200).send({
            message: "Success POST"
        }
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})
```

b)

```
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActorById(req.params.id)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})
```

#### Exercicio 5 - ENDPOINT POST PARA MOVIE

```
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
            message: "Sucess POST"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})
```

#### EXERCICIO 1 - UUID

a) Acredito que seja mais seguro utilizar strings para os ids, pois pode-se gerar códigos mais complexos.

b)

```
import { v4 } from "uuid";

export class IdGenerator {
  public generate(): string {
    return v4();
  }
}
```

#### EXERCICIO 2 - MODELAGEM DO BANCO DE DADOS

a) O código em questão cria uma conexão com o banco de dados criado, e com a função createUser insere um novo usuário na tabela User.

b) Para criar a tabela de usuários, foram utilizadas as seguintes querys:

```
CREATE TABLE User (
id  VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
```

c)

```
import { connection } from "../index";
import IdGenerator from "../services/IdGenerator";

export class UserDataBase {
  private id: string = IdGenerator.execute();
  private static TABLE_NAME: string = "User";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(UserDataBase.TABLE_NAME);
  }
}
```

d)

```
const user1: UserDatabase = new UserDatabase();
user1.createUser("Israel", "israel@labenu.com");
```

#### EXERCICIO 3 - JWT

a) "as string" faz com que não tenhamos erro caso a consulta retorne 'undefined'

b)

```
import * as jwt from "jsonwebtoken";

// PARA SEMPRE SER O ID DO USUÁRIO
interface AuthenticationData {
  id: string;
}

export default class Authenticator {
  // GERAR O TOKEN - INPUT é a info a ser encriptada
  static generateToken(input: AuthenticationData) {
    // SIGN PARA GERAR O TOKEN
    return jwt.sign(
      // PAYLOAD: GERALMENTE O ID
      input,
      // KEY: CHAVE GUARDADA NO .env (INFO SENSÍVEL) - as string é para garantir que o valor existe e não tenhamos erro caso a consulta retorne 'undefined'
      process.env.JWT_KEY as string,
      // OPTION: POR EXEMPLO O TEMPO PARA EXPIRAR O TOKEN - INFO SENSÍVEL GUARDADA NO .env
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
  }
}
```

#### EXERCICIO 4 - ENDPOINT SIGNUP

a)

```
export default async function signup(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const id = IdGenerator.execute();

    await connection.insert({ id, email, password }).into(userTableName);

    const token = Authenticator.generateToken({ id });

    res.status(200).send({
      message: "Usuário criado com sucesso!",
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}
```

b)

```
if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
}
```

c)

```
if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
}
```

#### EXERCICIO 5 - ENDPOINT LOGIN

a)

```
public async getUserByEmail(email: string): Promise<any> {
    const result = await connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }
```

b)

```
(async () => {
  console.log(await user.getUserByEmail("israel@labenu.com"));
})();
```

#### EXERCICIO 6 - ENDPOINT LOGIN

c)

```
export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = await connection(userTableName).select().where({
      email,
      password,
    });

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    if (!result[0]) {
      throw new Error(
        "Login não encontrado: Verifique se o usuário e a senha estão corretos"
      );
    }

    const token = Authenticator.generateToken({
      id: result[0].id,
    });

    res.status(200).send({
      message: "Usuário logado com sucesso!",
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}
```

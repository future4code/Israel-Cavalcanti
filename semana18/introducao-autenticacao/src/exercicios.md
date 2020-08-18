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

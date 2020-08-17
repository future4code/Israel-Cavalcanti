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

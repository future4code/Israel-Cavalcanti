### Exercício 1

a) Demais comandos: CREATE TABLE, VARCHAR, PRIMARY KEY, NOT NULL e DATE.

```
CREATE TABLE = Criar uma tabela nova;
```

```
VARCHAR(n) = Receber apenas strings com (n) caracteres;
```

```
PRIMARY KEY = É a chave primária (id);
```

```
NOT NULL = Impede que um campo seja "Null";
```

```
DATE = Representa uma data com o formato YYYY-MM-DD;
```

b) Ao utilizar SHOW DATABASES uma aba é aberta informando quais os databases pertencentes ao banco de dados.

Ao utilizar SHOW TABLES uma aba é aberta informando as tabelas existentes.

c) Ao utilizar SHOW Actor, ocorre um erro 1064. O correto seria utilizar DESCRIBE Actor, para mostrar os parâmetros, tipos e Keys existentes na tabela.

### Exercício 2

a)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
)
```

b)

```
INSERT INTO Actor (id, name, salary, birth_date)
 VALUES(
 "002",
 "Exercicio 2b",
 11111,
 "1111-11-11",
 "male"
 )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.000 sec
```

O Erro acima diz:
"Código de erro: 1062. Entrada duplicada '002'."
OU SEJA: Nesse caso, a coluna de id impede que exista um valor repetido.

c)

```
INSERT INTO Actor (id, name, salary)
 VALUES(
   "003",
   "Fernanda Montenegro",
   300000,
   "1929-10-19",
   "female"
 )	Error Code: 1136. Column count doesn't match value count at row 1	0.000 sec
```

O Erro acima diz:
"Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1."
OU SEJA: Nesse caso, está sendo passado 5 VALUES, enquanto no INSERT são passados apenas 3 parâmetros.

d)

```
0	21	16:15:49	INSERT INTO Actor (id, salary, birth_date, gender)
 VALUES(
   "004",
   400000,
   "1949-04-18",
   "male"
 )	Error Code: 1364. Field 'name' doesn't have a default value	0.016 sec
```

"Código de erro: 1364. O campo 'nome' não tem um valor padrão."
OU SEJA: Como o campo nome possui a key NOT NULL, não é possível inserir uma nova linha sem que exista um nome.

e)

```
0	22	16:19:26	INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  1979-03-26,
  "female"
)	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.016 sec
```

"Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date'."
OU SEJA: O valor de data está inserido de forma errada, é necessário incluir as aspas no começo e no final da data inserida.

### Exercício 3

a)

```
SELECT * from Actor WHERE gender = "female"
```

b)

```
SELECT salary FROM Actor WHERE name = "Tony ramos"
```

c)

```
SELECT * FROM Actor WHERE gender = "invalid"
```

Aqui o retorno é uma tabela com todas as colunas null. Isso acontece pois o resultado é que não existe nenhuma linha que possua o gender = "invalid".

d)

```
SELECT id, name, salary FROM Actor WHERE salary <= 500000
```

e)

```
SELECT id, nome from Actor WHERE id = "002"
Error Code: 1054. Unknown column 'nome' in 'field list'	0.015 sec
```

"Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'"
OU SEJA: Não existe a coluna 'nome', o correto é 'name'.

### Exercício 4

a)

```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

name "começado por A" OU name "começado com J" E salario maior que 300000

b)

```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

c)

```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%"
```

d)

```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%A%" OR "%G%") AND salary BETWEEN 350000 AND 900000
```

### Exercício 5

### Exercício 1 - ALTER

a)

```
ALTER TABLE Actor DROP COLUMN salary
```

Este comando irá deletar a coluna 'salary'da tabela 'Actor'

b)

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

Este comando irá alterar o nome da coluna 'gender' para 'sex' e será do tipo string com no máximo 6 letras.

c)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Este comando irá alterar apenas o tipo da coluna gender, que passará a ser apenas VARCHAR(255) -> Sem o NOT NULL agora.

d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100) NOT NULL;
```

### Exercício 2 - CRUD -> UPDATE

a)

```
UPDATE Actor
SET name = "Fernanda Montebranco", birth_date = "2020-08-11"
WHERE id = "003";
```

b)

```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c)

```
UPDATE Actor
SET name = "Paes Juliana", salary = "10", birth_date = "2020-08-11", gender = "male", favorite_ice_cream_flavor = "chocolate"
WHERE id ="005";
```

d)

```
UPDATE Actor
SET name = "Testando id inexistente"
WHERE id = "2020"
```

Utilizando o comando acima, ocorre sucesso, mas os valores não são exibidos ou inseridos na tabela, pois WHERE apenas verificará se existe o id solicitado e mesmo que não exista, dará a tarefa como feita.

### Exercício 3 -> DELETE

a)

```
DELETE FROM Actor
WHERE name = "Fernanda Montebranco";
```

b)

```
DELETE FROM Actor
WHERE gender = "male", salary > 1000000;
```

### Exercício 4 - FUNÇÕES MySQL

a)

```
SELECT MAX(salary) FROM Actor;
```

b)

```
SELECT MAX(salary) FROM Actor WHERE gender = "female";
```

c)

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)

```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5 - LIMIT -> ORDER BY e GROUP BY

a)

```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```

Conte quantos do tipo 'gender' da coluna Actor existe e faça um grupo para cada linha existente dentro da coluna 'gender'

b)

```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)

```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d)

```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)

```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6 - ALTER / DELETE / UPDATE

a)

```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

b)

```
ALTER TABLE Movies CHANGE rating rating FLOAT NOT NULL;
```

c)
Ainda em cartaz:

```
UPDATE Movies
SET playing_limit_date = "2020-09-20"
WHERE id = "2";
```

Já saiu de cartaz:

```
UPDATE Movies
SET playing_limit_date = "2019-01-21"
WHERE id = "1";
```

d)
Deletar um filme:

```
DELETE FROM Movies
WHERE id = "1";
```

Atualizar sinopse do filme deletado:

```
UPDATE Movies
SET synopsis = "Testando nova sinopse"
WHERE id = "1";
```

O código acima retorna como sucesso, porém nada é modificado devido a não existir o id que foi deletado no código anterior.

### Exercício 7 - FUNÇÕES

a)

```
SELECT * FROM Movies
WHERE rating > 7.5;
```

b)

```
SELECT AVG(rating) AS "Média de avaliação" FROM Movies;
```

c)

```
SELECT COUNT(*) AS "Em cartaz" FROM Movies WHERE playing_limit_date > CURDATE();
```

d)

```
SELECT COUNT(*) AS "Filmes em breve" FROM Movies WHERE release_Date < CURDATE();
```

e)

```
SELECT MAX(rating) AS "Maior nota" FROM Movies;
```

f)

```
SELECT MAX(rating) AS "Maior nota" FROM Movies;
```

### Exercício 8 - FUNÇÕES

a)

```
SELECT * FROM Movies
ORDER BY title;
```

b)

```
SELECT * FROM Movies
ORDER BY title
LIMIT 5;
```

c)

```
SELECT * FROM Movies
WHERE release_Date < CURDATE()
ORDER BY release_Date DESC
LIMIT 3;
```

d)

```
SELECT * FROM Movies
ORDER BY rating DESC
LIMIT 3;
```

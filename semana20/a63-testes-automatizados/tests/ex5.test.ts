import {
  User,
  Casino,
  Result,
  ResultItem,
  NACIONALITY,
  LOCATION,
  verifyAge,
} from "../src/ex3";

// EX 5.A
test("Testando usuário brasileiro que possa entrar em casino brasileiro. VERIFICAR: tamanho do array allowed do brasilians seja menor que 2 e maior que 0", () => {
  const brazilian: User = {
    name: "Usuario Brasileiro",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    location: LOCATION.BRAZIL,
    name: "Casino do Zé",
  };

  const result = verifyAge(casino, [brazilian]);

  expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  expect(result.brazilians.allowed.length).toBeLessThan(2);
});

// EX 5.B
test("Testando usuário americano que possa entrar em casino brasileiro. VERIFICAR: tamanho do array unallowed americans seja igual a 0", () => {
  const american: User = {
    name: "Usuario Americano",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    location: LOCATION.BRAZIL,
    name: "Casino do Zé",
  };

  const result = verifyAge(casino, [american]);

  expect(result.americans.unallowed.length).toBe(0);
});

// EX 5.C
test("Testando 2 usuários brasileiros e 2 americanos. todos com 19 anos para entrar em casinos nos EUA. VERIFICAR: alloweds possuam o nome de algum dos usuarios criados", () => {
  const casino: Casino = {
    location: LOCATION.EUA,
    name: "Casino Royale",
  };

  const users: User[] = [
    {
      name: "Mickey",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    },
    {
      name: "Duck Donald",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    },
    {
      name: "Yuzo",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    },
    {
      name: "Tati",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    },
  ];

  const result = verifyAge(casino, users);

  expect(result.americans.unallowed).toContain("Mickey");
  expect(result.brazilians.unallowed).toContain("Yuzo");
});

// EX 5.D
test("Testando 2 usuários brasileiros e 2 americanos. BRs com 19 anos,e Americanos com 21. Todos querendo entrar no casino americano. VERIFICAR: tamanho do unallowed brasilians seja maior que 1; tamanho do aunallowed americans seja menor que 1; tamanho do allowed americans seja igual a 2", () => {
  const casino: Casino = {
    location: LOCATION.EUA,
    name: "Casino Royale",
  };

  const users: User[] = [
    {
      name: "Mickey",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    },
    {
      name: "Duck Donald",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    },
    {
      name: "Yuzo",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    },
    {
      name: "Tati",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    },
  ];

  const result = verifyAge(casino, users);

  expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  expect(result.americans.unallowed.length).toBeLessThan(1);
  expect(result.americans.allowed.length).toBe(2);
});

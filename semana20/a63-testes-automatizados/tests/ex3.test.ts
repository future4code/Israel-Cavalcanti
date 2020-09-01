import {
  User,
  Casino,
  Result,
  ResultItem,
  NACIONALITY,
  LOCATION,
  verifyAge,
} from "../src/ex3";

// EX 4.A
test("Testando usuário brasileiro que possa entrar em casino brasileiro", () => {
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

  expect(result.brazilians.allowed).toEqual(["Usuario Brasileiro"]);
});

// EX 4.B
test("Testando usuário americano que possa entrar em casino brasileiro", () => {
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

  expect(result.americans.allowed).toEqual(["Usuario Americano"]);
});

// EX 4.C
test("Testando 2 usuários brasileiros e 2 americanos. todos com 19 anos para entrar em casinos nos EUA", () => {
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

  expect(result.americans.unallowed).toEqual(["Mickey", "Duck Donald"]);
  expect(result.brazilians.unallowed).toEqual(["Yuzo", "Tati"]);
});

// EX 4.D
test("Testando 2 usuários brasileiros e 2 americanos. BRs com 19 anos,e Americanos com 21. Todoss querendo entrar no casino americano", () => {
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

  expect(result.americans.allowed).toEqual(["Mickey", "Duck Donald"]);
  expect(result.brazilians.unallowed).toEqual(["Yuzo", "Tati"]);
});

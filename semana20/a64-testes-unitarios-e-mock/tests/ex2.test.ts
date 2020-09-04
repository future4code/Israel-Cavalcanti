import { validateCharacter } from "../src/ex1";

describe("Exercicio 2", () => {
  //EX.2A
  test("Retornar false quando nome do personagem for vazio", () => {
    const result = validateCharacter({
      name: "",
      defense: 500,
      life: 1500,
      strength: 300,
    });

    expect(result).toBe(false);
  });

  //EX.2B
  test("Retornar false quando a vida está vazia (=0)", () => {
    const result = validateCharacter({
      name: "Israel",
      defense: 500,
      life: 0,
      strength: 1500,
    });

    expect(result).toBe(false);
  });

  //EX.2C
  test("Retornar false quando a força está vazia (=0)", () => {
    const result = validateCharacter({
      name: "Luiz",
      defense: 500,
      life: 1500,
      strength: 0,
    });

    expect(result).toBe(false);
  });

  //EX.2D
  test("Retornar false quando a defesa está vazia (=0)", () => {
    const result = validateCharacter({
      name: "Diego",
      defense: 0,
      life: 13,
      strength: 4000,
    });

    expect(result).toBe(false);
  });

  //EX.2E
  test("Retornar false quando a vida, a força ou defesa tiverem valor negativo", () => {
    const result = validateCharacter({
      name: "Joaozinho",
      defense: -1,
      life: -2,
      strength: -3,
    });
    expect(result).toBe(false);
  });
});

//EX.2F
test("Retornar false quando a vida, força ou defesa tiverem valor = 0", () => {
  const result = validateCharacter({
    name: "Mariazinha",
    defense: 0,
    life: 0,
    strength: 0,
  });
  expect(result).toBe(false);
});

//EX.2G
test("Retornar true quando todas informações do personagem forem válidas", () => {
  const result = validateCharacter({
    name: "Joaozao",
    defense: 100,
    life: 200,
    strength: 300,
  });
  expect(result).toBe(true);
});

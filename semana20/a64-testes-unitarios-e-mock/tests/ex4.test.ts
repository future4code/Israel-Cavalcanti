//EX.4A
// Devemos fazer um mock da performAttack pois a inversão de dependências da função validateCharacter já está aplicada nela.

import { Character } from "../src/ex1";
import { performAttack2 } from "../src/ex3";
import { EXDEV } from "constants";

//EX.4B
test("Mock bem sucedido", () => {
  const mockSucess = jest.fn(() => {
    return true;
  });
});

//EX.4C
test("Mock falho", () => {
  const mockFail = jest.fn(() => {
    return false;
  });
});

//EX.5A
test("Dois personagens válidos, defensor deve perder 200 de vida. Verificar o estado final dos personagens e quantas vezes a função mockada foi acionada e quantas vezes retornou", () => {
  const mockSucess = jest.fn(() => {
    return true;
  });

  const atacante: Character = {
    name: "Silvio Santos",
    defense: 200,
    life: 1500,
    strength: 600,
  };

  const defensor: Character = {
    name: "Ratinho",
    defense: 400,
    strength: 800,
    life: 1500,
  };

  performAttack2(atacante, defensor, mockSucess as any);

  expect(defensor.life).toEqual(1300);
  expect(mockSucess).toHaveBeenCalled();
  expect(mockSucess).toHaveBeenCalledTimes(2);
  expect(mockSucess).toHaveReturnedTimes(2);
});

//EX.5B
test("Verificar se um dos personagens possui alguma informação inválida e qual a mensagem de erro. Verificar quantas vezes a função mockada foi acionada, o que ela retornou e quantas vezes retornou", () => {
  expect.assertions(4);

  const mockFail = jest.fn(() => {
    return false;
  });

  const atacante: Character = {
    name: "Silvio Santos",
    defense: 200,
    life: 1500,
    strength: 600,
  };

  const defensor: Character = {
    name: "Ratinho",
    defense: 400,
    strength: 800,
    life: 1500,
  };

  try {
    performAttack2(atacante, defensor, mockFail as any);
  } catch (error) {
    expect(error.message).toBe(
      "Personagem inválido, verifique as informações de ambos!"
    );
    expect(mockFail).toHaveBeenCalled();
    expect(mockFail).toHaveBeenCalledTimes(1);
    expect(mockFail).toHaveReturnedTimes(1);
  }
});

import { Character, validateCharacter } from "./ex1";

// EX.1
const lutador1: Character = {
  defense: 500,
  life: 1500,
  name: "Batman",
  strength: 700,
};

console.log("Validação do lutador1: " + validateCharacter(lutador1));

const lutador2: Character = {
  defense: 0,
  life: 0,
  name: "Morto",
  strength: 0,
};

console.log("Validação do lutador2: " + validateCharacter(lutador2));

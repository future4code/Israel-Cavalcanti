import { Character, validateCharacter } from "./ex1";
import { EXDEV } from "constants";

//EX.3A
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Personagem inválido, verifique as informações de ambos!");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

//EX.3B
export const performAttack2 = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Personagem inválido, verifique as informações de ambos!");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

//EX.3C
// A diferença entre as duas aplicações acima basicamente é que na segunda, o personagem é validado diretamente com o validator

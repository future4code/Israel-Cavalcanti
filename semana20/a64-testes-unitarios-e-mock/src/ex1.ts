// EX1.A
export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

// EX1.B
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
    input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }
  if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
    return false;
  }
  return true;
};

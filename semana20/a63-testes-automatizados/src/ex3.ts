// ENTRADA
export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

// SAIDA
export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

// ASSINATURA
export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }
  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((users) => users.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((users) => users.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((users) => users.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((users) => users.name),
    },
  };
}

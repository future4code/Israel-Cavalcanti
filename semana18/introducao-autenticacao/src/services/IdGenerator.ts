import { v4 } from "uuid";

export default class IdGenerator {
  static execute(): string {
    return v4();
  }
}

// console.log("NOVO ID GERADO: " + IdGenerator.execute());

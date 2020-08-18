import { v4 } from "uuid";

export default class IdGenerator {
  static execute(): string {
    return v4();
  }
}

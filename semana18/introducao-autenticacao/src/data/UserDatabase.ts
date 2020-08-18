import IdGenerator from "../services/IdGenerator";
import { connection } from "../index";

export default class UserDatabase {
  private id: string = IdGenerator.execute();

  private static TABLE_NAME: string = "User";

  public async createUserDb(email: string, password: string): Promise<void> {
    await connection.raw(`
    INSERT INTO ${UserDatabase.TABLE_NAME} (id, email, password)
    VALUES(
      '${this.id}',
      '${email}',
      '${password}'
    )`);
  }
}

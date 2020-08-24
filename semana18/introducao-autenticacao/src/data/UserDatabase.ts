import IdGenerator from "../services/IdGenerator";
import { connection } from "../index";

export default class UserDatabase {
  private id: string = IdGenerator.execute();

  private static TABLE_NAME: string = "User";

  public async createUser(email: string, password: string): Promise<void> {
    await connection.raw(`
    INSERT INTO ${UserDatabase.TABLE_NAME} (id, email, password)
    VALUES(
      '${this.id}',
      '${email}',
      '${password}'
    )`);
  }

  // PARA ACESSAR AS INFORMAÇÕES DO USUÁRIO ATRAVÉS DO EMAIL
  public async getUserByEmail(email: string): Promise<any> {
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido, verifique novamente");
    }
    const result = await connection
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }
}

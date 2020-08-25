import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class LoginBusiness {
  public async login(email: string, password: string): Promise<string> {
    // INSERIR USUÁRIO NO BANCO
    const userDataBase = new UserDatabase();
    const user = await userDataBase.getUserByEmail(email);

    // CRIPTOGRAFAR SENHA
    const hashManager = new HashManager();
    const isPasswordCorrect = await hashManager.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Usuário ou senha informado não existe(m)!");
    }

    // AUTENTICAÇÃO DO ID
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.id });

    return token;
  }
}

import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class SignupBusiness {
  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<string> {
    if (!name || !email || !password) {
      throw new Error("Verifique se todos campos foram preenchidos!");
    }

    if (email.indexOf("@") === -1) {
      throw new Error("Email inválido, verifique novamente!");
    }

    if (password.length < 6) {
      throw new Error("Sua senha deve conter mais de 6 caracteres!");
    }

    // GERAR ID
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    // CRIPTOGRAFAR SENHA
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    // INSERIR USUÁRIO NO BANCO
    const userDataBase = new UserDatabase();
    await userDataBase.registerUser(id, name, email, hashPassword, role);

    // AUTENTICAÇÃO DO ID
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    return token;
  }
}

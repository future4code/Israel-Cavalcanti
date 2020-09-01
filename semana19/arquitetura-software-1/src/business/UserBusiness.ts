import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
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

  /***********************************************************/

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

    // AUTENTICAÇÃO DO ID e GERAR NOVO TOKEN
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.id });

    return token;
  }

  /***********************************************************/

  public async getUserProfile(token: string): Promise<any> {
    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userDataBase = new UserDatabase();
    const user = await userDataBase.getUserById(authenticationData.id);

    return user;
  }

  /***********************************************************/

  public async deleteUser(id: string, token: string): Promise<any> {
    const userDatabase = new UserDatabase();

    const authenticator = new Authenticator();
    const verifiedToken = authenticator.getData(token);

    if (!verifiedToken) {
      throw new Error("Apenas administradores podem deletar usuários!");
    }

    return await userDatabase.deleteUser(id);
  }
}

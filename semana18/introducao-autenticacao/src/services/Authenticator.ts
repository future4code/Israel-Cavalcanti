import * as jwt from "jsonwebtoken";

// PARA SEMPRE SER O ID DO USUÁRIO
interface AuthenticationData {
  id: string;
}

export default class Authenticator {
  // GERAR O TOKEN - INPUT é a info a ser encriptada
  static generateToken(input: AuthenticationData) {
    // SIGN PARA GERAR O TOKEN
    return jwt.sign(
      // PAYLOAD: GERALMENTE O ID
      input,
      // KEY: CHAVE GUARDADA NO .env (INFO SENSÍVEL) - as string é para garantir que o valor existe e não tenhamos erro caso a consulta retorne 'undefined'
      process.env.JWT_KEY as string,
      // OPTION: POR EXEMPLO O TEMPO PARA EXPIRAR O TOKEN - INFO SENSÍVEL GUARDADA NO .env
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
  }

  // VERIFICAR SE O TOKEN É VÁLIDO
  static getTokenData(token: string): any {
    const tokenData =
      // VERIFY
      jwt.verify(
        // TOKEN A SER VERIFICADO
        token,
        // KEY UTILIZADA PARA GERAR O TOKEN
        process.env.JWT_KEY as string
      );
    return tokenData as AuthenticationData;
  }

  // RECEBER O TOKEN E DEVOLVER AS INFORMAÇÕES DO USUÁRIO
  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  }
}

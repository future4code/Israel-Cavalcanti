import { Request, Response } from "express";
import { connection, userTableName } from "../index";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

export default async function signup(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const id = IdGenerator.execute();

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    if (!req.body.password || req.body.password.lenght < 6) {
      throw new Error("Senha inválida: A senha deve ter mais de 6 digitos");
    }

    await connection.insert({ id, email, password }).into(userTableName);

    const token = Authenticator.generateToken({ id });

    res.status(200).send({
      message: "Usuário criado com sucesso!",
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}

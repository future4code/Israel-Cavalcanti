import { Request, Response } from "express";
import { connection, userTableName } from "../index";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const result = await connection(userTableName).select().where({
      email,
      password,
    });

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    if (!result[0]) {
      throw new Error(
        "Login não encontrado: Verifique se o usuário e a senha estão corretos"
      );
    }

    const token = Authenticator.generateToken({
      id: result[0].id,
    });

    res.status(200).send({
      message: "Usuário logado com sucesso!",
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}

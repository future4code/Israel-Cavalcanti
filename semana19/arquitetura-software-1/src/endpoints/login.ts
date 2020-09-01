import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserBusiness } from "../business/UserBusiness";

export const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // GERENCIADOR DAS REGRAS DE NEGÓCIOS
    const userBusiness = new UserBusiness();
    const token = await userBusiness.login(email, password);

    res.status(200).send({
      message: "Login realizado com sucesso",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao fazer login",
      error: error.message,
    });
  }
  await BaseDatabase.destroyConnection();
};

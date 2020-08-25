import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserBusiness } from "../business/UserBusiness";

export const signup = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    // GERENCIADOR DAS REGRAS DE NEGÓCIOS
    const userBusiness = new UserBusiness();
    const token = await userBusiness.signup(name, email, password, role);

    res.status(200).send({
      message: "Usuário criado com sucesso",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: "Erro ao criar usuário",
      error: error.message,
    });
  }
  await BaseDatabase.destroyConnection();
};

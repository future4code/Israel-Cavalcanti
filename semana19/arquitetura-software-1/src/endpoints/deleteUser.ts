import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export const deleteUser = async (req: Request, res: Response) => {
  const userBusiness: UserBusiness = new UserBusiness();

  try {
    await userBusiness.deleteUser(
      req.params.id,
      req.headers.authorization as string
    );

    res.status(200).send({ message: "Usuário apagado com sucesso" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }

  await BaseDatabase.destroyConnection();
};

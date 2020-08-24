import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import UserDatabase from "./data/UserDatabase";
import Authenticator from "./services/Authenticator";
import signup from "./endpoints/signup";
import login from "./endpoints/login";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// CRIAR NOVO USUÁRIO:
const user: UserDatabase = new UserDatabase();

// user.createUserDb("israel@labenu.com", "password1234");

/**************************************************/

// GERAR TOKEN
const token = Authenticator.generateToken({ id: "bananinha" });
// console.log("NOVO TOKEN GERADO: " + token);

// VERIFICAR SE O TOKEN É VÁLIDO
const tokenData = Authenticator.getTokenData(token);
// {id: bananinha, iat = momento de criação, exp: momento de expiração}
// console.log(tokenData);

/**************************************************/
//SIGNUP
export const userTableName = "User";
app.post("/user/signup", signup);

/**************************************************/
// BUSCAR INFOS DO USUÁRIO COM O EMAIL INFORMADO
// (async () => {
//   console.log(await user.getUserByEmail("israel@labenu.com"));
// })();

/**************************************************/
// LOGIN
app.post("/user/login", login);

/**************************************************/
const getData = Authenticator.getTokenData(token);
console.log(getData);

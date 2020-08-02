import * as moment from "moment";
import getAllAccounts from "./getAllAccounts";

export default () => {
  const accounts = getAllAccounts();

  for (const account of accounts) {
    console.log("Nome: " + account.name);
    console.log("CPF: " + account.cpf.toString());
    console.log(
      "Data de nascimento: " +
        moment.unix(account.birthday).format("DD/MM/YYYY")
    );
  }
};

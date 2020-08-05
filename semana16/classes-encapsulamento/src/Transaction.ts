import * as moment from "moment";

export class Transaction {
  //
  constructor(
    private value: number,
    private description: string,
    // pega a data do dia por padrão:
    private date: string = moment().format("DD/MM/YYYY")
  ) {}
  // GETTERS
  getValue = () => this.value;
  getDescription = () => this.description;
  getDate = () => this.date;
}

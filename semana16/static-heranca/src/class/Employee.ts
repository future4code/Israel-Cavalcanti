import { User } from "./User";
import * as moment from "moment";

export class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = admissionDate;
    this.baseSalary = baseSalary;
  }
  // GETTERS
  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBaseSalary(): number {
    return this.baseSalary;
  }
  // Adicionado pelo execício 7
  public calculateTotalSalary(): number {
    return this.baseSalary + 400;
  }
}

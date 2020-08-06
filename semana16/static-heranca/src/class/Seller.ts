import { Employee } from "./Employee";

export class Seller extends Employee {
  private salesQuantity: number = 0;
  static SELLING_COMISSION: number = 5;

  //SETTERS
  public setSalesQuantity(quantity: number): number {
    return (this.salesQuantity = quantity);
  }

  //GETTERS
  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  // OVERRIDE
  calculateTotalSalary(): number {
    return (
      this.getBaseSalary() + 400 + Seller.SELLING_COMISSION * this.salesQuantity
    );
  }
}

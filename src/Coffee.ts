import { Drink } from "./Drink";

export class Coffee extends Drink {
  
feature(): void {
    console.log(`${this.name} + เพิ่ม นม `);
  }
}
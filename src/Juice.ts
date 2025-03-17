import { Drink } from "./Drink";

export class Juice extends Drink {
  feature(): void {
    console.log(`${this.name} + ใส่เเตงโม `);
  }
}
import { Food } from "./Food";

export class Pizza extends Food {
addPizza(): void {
    console.log(`${this.name} เพิ่ม : ชีทยืดๆ`);
  }
    }
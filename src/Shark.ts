import { Fish } from "./Fish";

export class shark extends Fish {
  swim(): void {
    console.log(`${this.species} การว่ายน้ำ : ว่ายโดยขยับ ครีบหางขึ้น-ลงด้านข้าง`);
  }
}
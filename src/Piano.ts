import { Instrument } from "./Instrument";

export class Piano extends Instrument {
  playPiano(): void {
    console.log(`${this.name} : ( เล่นเสียง ดิ่ง ดิง ด๋อง ดิ่งดิง ด๋อง  ) `);
  }
}
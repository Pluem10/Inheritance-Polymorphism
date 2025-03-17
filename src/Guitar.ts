import { Instrument } from "./Instrument";

export class Guitar extends Instrument {
  playGuitar(): void {
    console.log(`${this.name} : ( เล่นเสียง ตะแนว ตะแนว ) `);
  }
}
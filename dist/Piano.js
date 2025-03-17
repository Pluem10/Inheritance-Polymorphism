"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piano = void 0;
const Instrument_1 = require("./Instrument");
class Piano extends Instrument_1.Instrument {
    playPiano() {
        console.log(`${this.name} : ( เล่นเสียง ดิ่ง ดิง ด๋อง ดิ่งดิง ด๋อง  ) `);
    }
}
exports.Piano = Piano;

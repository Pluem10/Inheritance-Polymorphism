"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
const Instrument_1 = require("./Instrument");
class Guitar extends Instrument_1.Instrument {
    playGuitar() {
        console.log(`${this.name} : ( เล่นเสียง ตะแนว ตะแนว ) `);
    }
}
exports.Guitar = Guitar;

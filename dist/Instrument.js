"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrument = void 0;
class Instrument {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log(`${this.name} : "กําลังเล่นเพลง" `);
    }
}
exports.Instrument = Instrument;

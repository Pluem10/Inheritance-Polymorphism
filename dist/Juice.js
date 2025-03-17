"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = void 0;
const Drink_1 = require("./Drink");
class Juice extends Drink_1.Drink {
    feature() {
        console.log(`${this.name} + ใส่เเตงโม `);
    }
}
exports.Juice = Juice;

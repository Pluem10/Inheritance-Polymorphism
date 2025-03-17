"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const Drink_1 = require("./Drink");
class Coffee extends Drink_1.Drink {
    feature() {
        console.log(`${this.name} + เพิ่ม นม `);
    }
}
exports.Coffee = Coffee;

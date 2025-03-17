"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    constructor(name) {
        this.name = name;
    }
    serve() {
        console.log(`${this.name} : " พร้อมเสิร์ฟเเล้วครับ " `);
    }
}
exports.Drink = Drink;

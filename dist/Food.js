"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name) {
        this.name = name;
    }
    serveFood() {
        console.log(`${this.name} : ส่งสําเร็จเเล้ว `);
    }
}
exports.Food = Food;

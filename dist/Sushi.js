"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sushi = void 0;
const Food_1 = require("./Food");
class Sushi extends Food_1.Food {
    addSushi() {
        console.log(`${this.name} : เพิ่ม = ชีทยืดๆ`);
    }
}
exports.Sushi = Sushi;

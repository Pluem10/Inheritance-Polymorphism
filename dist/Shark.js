"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shark = void 0;
const Fish_1 = require("./Fish");
class shark extends Fish_1.Fish {
    swim() {
        console.log(`${this.species} การว่ายน้ำ : ว่ายโดยขยับ ครีบหางขึ้น-ลงด้านข้าง`);
    }
}
exports.shark = shark;

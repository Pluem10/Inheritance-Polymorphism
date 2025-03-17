"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aircraft = void 0;
class Aircraft {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
    }
    fly() {
        console.log(`"Aircraft" : ${this.model} "Capacity" : จํานวน ${this.capacity} ที่นั่ง  ( พร้อมบิน )`);
    }
}
exports.Aircraft = Aircraft;

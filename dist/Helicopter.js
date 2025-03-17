"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helicopter = void 0;
const Aircraft_1 = require("./Aircraft");
class Helicopter extends Aircraft_1.Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
        this.model = model;
        this.capacity = capacity;
    }
}
exports.Helicopter = Helicopter;

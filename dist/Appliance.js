"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = exports.WashingMachine = exports.Refrigerator = void 0;
class Refrigerator {
    turnOn() {
        console.log("ตู้เย็นกําลังเปิดเเล้ว ปิ้งป๋อง");
    }
    turnOff() {
        console.log("ตู้เย็นกําลังปิดเเล้ว ปิ้งป๋อง");
    }
}
exports.Refrigerator = Refrigerator;
class WashingMachine {
    turnOn() {
        console.log("เครื่องซักผ้าเปิดอยู่ ตู้ดดดดๆๆ");
    }
    turnOff() {
        console.log("เครื่องซักผ้าเปิดอยู่ ติ้ดดดๆๆ");
    }
}
exports.WashingMachine = WashingMachine;
class Microwave {
    turnOn() {
        console.log("ไมโครเวฟเปิดอยู่ ปิ้งงงงง");
    }
    turnOff() {
        console.log("ไมโครเวฟปิดอยู่ ปิ้งงงงง");
    }
}
exports.Microwave = Microwave;

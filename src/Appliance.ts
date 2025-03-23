export interface Appliance{
    turnOn():void
    turnOff():void
    

}

export class Refrigerator implements Appliance {
    turnOn(): void {
        console.log("ตู้เย็นกําลังเปิดเเล้ว ปิ้งป๋อง");
    }
    turnOff(): void {
        console.log("ตู้เย็นกําลังปิดเเล้ว ปิ้งป๋อง");
    }
}

export class WashingMachine implements Appliance {
    turnOn(): void {
        console.log("เครื่องซักผ้าเปิดอยู่ ตู้ดดดดๆๆ");
    }
    turnOff(): void {
        console.log("เครื่องซักผ้าเปิดอยู่ ติ้ดดดๆๆ");
    }
}
export class Microwave implements Appliance {
    turnOn(): void {
        console.log("ไมโครเวฟเปิดอยู่ ปิ้งงงงง");
    }
    turnOff(): void {
        console.log("ไมโครเวฟปิดอยู่ ปิ้งงงงง");
    }
}
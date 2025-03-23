import { Airplane } from "./Airplane";
import { Coffee } from "./Coffee";
import { Dolphin } from "./Dolphin";
import { Guitar } from "./Guitar";
import { Helicopter } from "./Helicopter";
import { Juice } from "./Juice";
import { Piano } from "./Piano";
import { Pizza } from "./Pizza";
import { shark } from "./Shark";
import { Appliance } from './Appliance';
import { Refrigerator } from "./Appliance";




console.log("########################### Fish ################################")
const dog1 = new shark("ฉลาม");
dog1.swim()
const cat1 = new Dolphin("โลมา");
cat1.swim()
console.log("########################### Drink ################################")
const Coffee1 = new Coffee("กาเเฟ")
Coffee1.serve();
Coffee1.feature();
const Juice1 = new Juice("นํ้าผลไม้")
Juice1.serve()
Juice1.feature()
console.log("########################### Aircraft ################################")
const aircraft1 = new Airplane("เครื่องบินขนส่ง"," 321 ")
aircraft1.fly()
const hari1 = new Helicopter("เครื่องบิน Helicopter"," 7")
hari1.fly()
console.log("########################### Instrument ################################")
const Guitar1 = new Guitar("กีต้า")
Guitar1.playGuitar()
const Piano1 = new Piano("เปียโน")
Piano1.playPiano()
console.log("########################### Food ################################")
const Pizza1 = new Pizza("ฮาวาเอี้ยน")
Pizza1.addPizza()
Pizza1.serveFood()

console.log("########################### Appliance ################################")
const ref1 = new Refrigerator()
ref1.turnOn()
ref1.turnOff()
console.log("###########################################################")


import { WashingMachine } from "./Appliance";
const wash1 = new WashingMachine()
wash1.turnOn()
wash1.turnOff()
console.log("###########################################################")

import { Microwave } from "./Appliance";
const micro1 = new Microwave ()
micro1.turnOn()
micro1.turnOff()



console.log("########################### Notification ################################")
import { EmailNotification } from "./Notification";

const email1 = new EmailNotification ("664259010@gmail.com")
email1.send("")
console.log(email1)

import { SMSNotification } from "./Notification";
const sms1 = new SMSNotification (+822345774)
sms1.send("")
console.log(sms1)

import { PushNotification } from "./Notification";
const push1 = new PushNotification ()
console.log(push1)
push1.send("Line : SatuNaja 99")
console.log("###################")
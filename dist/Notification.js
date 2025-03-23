"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = exports.SMSNotification = exports.EmailNotification = void 0;
class EmailNotification {
    constructor(email) {
        this.email = email;
    }
    send(message) {
        console.log(message + "ส่งการแจ้งเตือนไปยัง");
    }
}
exports.EmailNotification = EmailNotification;
class SMSNotification {
    constructor(phone) {
        this.phone = phone;
    }
    send(SMS) {
        console.log(SMS + "ส่งการแจ้งเตือนไปยังเบอร์");
    }
}
exports.SMSNotification = SMSNotification;
class PushNotification {
    send(message) {
        console.log("คุณมีการแจ้งเตือนใหม่" + "" + message);
    }
}
exports.PushNotification = PushNotification;

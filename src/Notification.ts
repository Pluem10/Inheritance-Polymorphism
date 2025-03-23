export interface Notification{
    send(message: string): void;
}

export class EmailNotification implements Notification{
    constructor(private email:string){}

send(message: string):void{
    console.log ( message + "ส่งการแจ้งเตือนไปยัง" )
}
}


export class SMSNotification implements Notification{
    constructor(private phone:number){}

    public send(SMS:string):void{
        console.log(SMS + "ส่งการแจ้งเตือนไปยังเบอร์" )
    }
}


export class PushNotification implements Notification{

    public send(message:string):void{
      console.log ("คุณมีการแจ้งเตือนใหม่"+"" + message)
    }
  }
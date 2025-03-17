export class Aircraft{
constructor(public model:string ,public capacity:string){}
  public  fly():void{
    console.log(`"Aircraft" : ${this.model} "Capacity" : จํานวน ${this.capacity} ที่นั่ง  ( พร้อมบิน )`);
}
}
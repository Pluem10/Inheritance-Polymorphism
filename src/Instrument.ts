export  class Instrument {
    constructor(public name:string){}
    public play():void{
    console.log(`${this.name} : "กําลังเล่นเพลง" `);
    }
}
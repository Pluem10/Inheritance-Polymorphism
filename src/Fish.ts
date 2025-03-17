export class Fish{
    constructor(public species:string){}
        public swim():void{}
        public getSpecies():void{
        console.log(`${this.species} สายพันธ์`);
        }
      }
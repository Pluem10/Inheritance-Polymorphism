import { Aircraft } from "./Aircraft";

export class Airplane extends Aircraft {
  constructor(public model:string,public capacity:string){
    super(model, capacity)
  }
}
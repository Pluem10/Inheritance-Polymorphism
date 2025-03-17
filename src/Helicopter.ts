import { Aircraft } from "./Aircraft";

export class Helicopter extends Aircraft {
  constructor(public model:string,public capacity:string){
    super(model, capacity)
}
}
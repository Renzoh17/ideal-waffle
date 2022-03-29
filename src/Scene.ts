import { Container } from "pixi.js";
import { CompleteMenu } from "./CompleteMenu";

export class Scene extends Container{
    constructor(){
    super();
    
    const completeMenu: CompleteMenu = new CompleteMenu();

    this.addChild(completeMenu);
    completeMenu.position.set(650,150);
    }
 
}
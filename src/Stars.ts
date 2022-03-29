import { Container, Sprite } from "pixi.js";

export class Stars extends Container{
    constructor(){
        super();
        const StarCenter = Sprite.from("Estrella");
        StarCenter.scale.set(0.35);
        StarCenter.position.set(205,140);
        StarCenter.angle=11;
        this.addChild(StarCenter);
        const StarRight = Sprite.from("Estrella");
        StarRight.scale.set(0.25);
        StarRight.position.set(355,180);
        this.addChild(StarRight);
        const StarLeft = Sprite.from("Estrella");
        StarLeft.scale.set(0.25);
        StarLeft.position.set(125,150);
        StarLeft.angle=31;
        this.addChild(StarLeft);
    }
}
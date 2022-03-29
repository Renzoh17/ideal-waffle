import { Container, NineSlicePlane, Texture } from "pixi.js";

export class NextButton extends Container{
    constructor(){
        super();
        const yellowButton = new NineSlicePlane(
            Texture.from("YellowButton"),
            35,35,35,35
        );
        this.addChild(yellowButton);
        yellowButton.width=200;
        yellowButton.height=100;
        const blackArrow = new NineSlicePlane(
            Texture.from("Arrow"),
            35,35,35,35
        );
        this.addChild(blackArrow);
        blackArrow.width=180;
        blackArrow.height=180;
        blackArrow.position.set(5,-40);
    }
}
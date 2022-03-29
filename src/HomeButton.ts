import { Container, NineSlicePlane, Sprite, Texture } from "pixi.js";

export class HomeButton extends Container{
    
    constructor(){
        super();
        const homeButtom = new NineSlicePlane(
            Texture.from("YellowButton"),
            35,35,35,35
        );
        this.addChild(homeButtom);
        homeButtom.width=100;
        homeButtom.height=100;
        const homeImage = Sprite.from("Home");
        this.addChild(homeImage);
        homeImage.width=70;
        homeImage.height=70;
        homeImage.position.set(15,10);
    }
    
}

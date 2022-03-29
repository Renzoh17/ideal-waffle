import { Container, NineSlicePlane, Texture, Text } from "pixi.js";

export class ScoreTable extends Container{
    constructor(){
        super();
        const subPanelBlue = new NineSlicePlane(
            Texture.from("SubPanelBlue"),
            35,35,35,35
        );
        this.addChild(subPanelBlue);
        subPanelBlue.width=450;
        subPanelBlue.height=90;
        const myText2 = new Text("Score: 150000", {fontSize: 50, fill: 0x000000, fontFamily: "Comic Sans MS"});
        this.addChild(myText2);
        myText2.position.set(50,5);
    }}
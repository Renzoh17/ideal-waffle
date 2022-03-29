import { Container, NineSlicePlane, Texture, Text} from "pixi.js";
import { Stars } from "./Stars";
import { HomeButton } from "./HomeButton";
import { NextButton } from "./NextButton";
import { ScoreTable } from "./ScoreTable";

export class CompleteMenu extends Container{
    constructor(){
        super();
        const panel = new NineSlicePlane(
            Texture.from("Panel"),
            35,35,35,35
        );
        this.addChild(panel);
        panel.height=800;
        panel.width=600;
        const subpanel = new NineSlicePlane(
            Texture.from("SubPanel"),
            35,35,35,35
        );
        this.addChild(subpanel);
        subpanel.width=600;
        subpanel.height=150;
        const myText = new Text("Level Complete", {fontSize: 50, fill: 0x000000, fontFamily: "Comic Sans MS"});
        this.addChild(myText);
        myText.position.set(120,35);

        const Stars3: Stars = new Stars();
        this.addChild(Stars3);
        
        const scoreTable = new ScoreTable();
        this.addChild(scoreTable);
        scoreTable.position.set(75,440);

        const homeButton = new HomeButton();
        this.addChild(homeButton);
        homeButton.position.set(50,650);
        const nextButton = new NextButton();
        this.addChild(nextButton);
        nextButton.position.set(350,650);
    }
}
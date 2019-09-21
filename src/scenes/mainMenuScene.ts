import CONST from "../const/const";

export default class MainMenuScene extends Phaser.Scene {

  constructor() {
    super({
      key: "MainMenuScene"
    });
  }

  init(): void {

  }

  preload(): void {

  }

  create(): void {

    const title = this.add
      .text(CONST.width / 2, CONST.height / 2, "Main Menu", {
        font: "200px Arial",
        fill: "black",
        stroke: "#590084",
        strokeThickness: 5,
        padding: { x: 0, y: 0 },
      })
      .setOrigin(0.5).setBackgroundColor("#ffffff");

    console.log(this.sys.canvas.width)

  }

  update(): void { }

}

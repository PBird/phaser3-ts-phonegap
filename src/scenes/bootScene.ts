import CONST from "../const/const";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }

  init() {

  }

  preload() {

  }
  create() {
    this.add.text(0, 0, "df", { font: "1px Poetsen" })
  }

  update(): void {
    this.scene.start('LoadScene');
  }
}

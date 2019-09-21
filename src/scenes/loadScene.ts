import CONST from "../const/const";

export default class LoadScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics;
  private loadingText: Phaser.GameObjects.Text;
  constructor() {
    super({
      key: "LoadScene"
    });
  }

  preload() {
    // set the background and create loading bar
    this.cameras.main.setBackgroundColor("0x22ADCD");
    this.loadingText = this.add
      .text(
        CONST.width / 2,
        CONST.height / 2.5, 'Loading...', {
        font: CONST.font.sizes.title + "px Poetsen",
        fill: "#590084",
        strokeThickness: 8,

      }
      )
      .setOrigin(0.5)
      .setTint(0x590084);
    this.createLoadingbar();

    this.load.on(
      "progress",
      function (value) {
        this.progressBar.clear();
        this.progressBar.fillStyle(0x590084, 1);
        this.progressBar.fillRect(
          CONST.width / 4,
          CONST.height / 2,
          (CONST.width / 2) * value,
          CONST.height / 24
        );
      },
      this
    );

    // delete bar graphics, when loading complete
    this.load.on(
      "complete",
      () => {
        this.cameras.main.fadeOut(500, 30, 173, 205).once("camerafadeoutcomplete", this.startMenuScene, this)
      }
    );

    // load out package


    // animation

  }

  update() {

  }

  private startMenuScene() {
    this.progressBar.destroy();
    this.loadingBar.destroy();
    this.loadingText.destroy();
    this.scene.start("MainMenuScene");
  }

  private createLoadingbar(): void {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0xffffff, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 8,
      this.cameras.main.height / 2 - 8,
      this.cameras.main.width / 2 + 16,
      (CONST.height / 24) + 16
    );
    this.progressBar = this.add.graphics();
  }
}


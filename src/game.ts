import "phaser";
import BootScene from "./scenes/bootScene";
import LoadScene from "./scenes/loadScene";
import MainMenuScene from "./scenes/mainMenuScene";
import CONST from "./const/const";

// 576x1024
const config: GameConfig = {
  title: "Blockade",
  url: "https://github.com/digitsensitive/phaser3-typescript",
  version: "1.0",
  width: 1080,
  height: 1920,
  scale: {
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
  },
  zoom: 1,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, LoadScene, MainMenuScene],
  physics: {
    default: "matter",
    matter: {
      debug: false,
      enableSleeping: false
    }
  },
  plugins: {
    // scene: [
    //   {
    //     plugin: PhaserMatterCollisionPlugin,
    //     key: "matterCollision",
    //     mapping: "matterCollision"
    //   }
    // ]
  },
  input: {
    keyboard: true,
    mouse: true,
    touch: true,
    gamepad: false
  },
  backgroundColor: "#22ADCD",
  render: { pixelArt: false, antialias: false }
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener("deviceready", this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent("deviceready");
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    // Yükseliği telefonun çözünürlüğüne göre ayarlıyoruz
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const ratioDevice = screenHeight / screenWidth;

    if (typeof config.width === "number") {
      config.height = config.width * ratioDevice;
      CONST.height = config.height;
    }

    // const physicalScreenWidth = window.screen.width * window.devicePixelRatio;
    // const physicalScreenHeight = window.screen.height * window.devicePixelRatio;
    // CONST.scale = 1

    // config.width = physicalScreenWidth;
    // config.height = physicalScreenHeight;
    // CONST.width = physicalScreenWidth;
    // CONST.height = physicalScreenWidth;
    const game = new Game(config);
  }
};

window.addEventListener("load", () => {
  app.initialize();
});

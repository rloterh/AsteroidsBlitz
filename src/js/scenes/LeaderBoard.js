import Phaser from 'phaser'
import {TitleScreen} from '../consts/SceneKeys'

export default class LeaderBoard extends Phaser.Scene {

  create() {
    let titleText = 'Leader Board'
    this.add.text(400, 160, titleText, {
      fontSize: 38
    }).setOrigin(0.5);
    
    this.add.text(400, 450, '*Press space to continue..*').setOrigin(0.5)

    this.input.keyboard.once(`keydown-SPACE`, () => {
      this.scene.start(TitleScreen)
    })
  }
}

import Phaser from 'phaser'
import {TitleScreen} from '../consts/SceneKeys'

export default class GameOver extends Phaser.Scene{
  create(data) {
    let titleText = 'Game Over'
    console.log(data.score)

    this.add.text(400, 200, titleText, {
      fontSize: 38
    }).setOrigin(0.5)

    this.input.keyboard.once(`keydown-SPACE`, () => {
      this.scene.start(TitleScreen)

      this.add.text(400, 500, 'Press space to continue').setOrigin(0.5)

    })

    //console.dir(data)
  }
}
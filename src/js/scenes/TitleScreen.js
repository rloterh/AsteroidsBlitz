import Phaser from 'phaser'
import {Game} from '../consts/SceneKeys'
import * as e from '../consts/const'

export default class TitleScreen extends Phaser.Scene {

  create() {
    e.ul.classList.remove('show-form')
    e.ul.classList.add('hide-form')
    const title  = this.add.text(400, 200, 'Asteroid Blitz!', {
      fontSize: 38
    })
    title.setOrigin(0.5, 0.5)

    this.start()
  }

  start() {
    this.add.text(400, 300, 'Press Space to Start!')
    .setOrigin(0.5)

    this.add.text(400, 520, '**Instructions:\n\n-> Move mouse to rotate ship\n-> click to shoot')
    .setOrigin(0.5)

    this.input.keyboard.once(`keydown-SPACE`, () => {
      this.scene.start(Game)
    })
  }
}
import Phaser from 'phaser'
import {Game} from '../consts/SceneKeys'


export default class TitleScreen extends Phaser.Scene{

  create(){
    const title  = this.add.text(400, 200, 'Asteroid Blitz!', {
      fontSize: 38
    })
    title.setOrigin(0.5, 0.5)

    this.add.text(400, 300, 'Press Space to Start!')
    .setOrigin(0.5)

    this.input.keyboard.once(`keydown-SPACE`, () => {
      this.scene.start(Game)
    })
    
    console.log('title scene')
  }

}
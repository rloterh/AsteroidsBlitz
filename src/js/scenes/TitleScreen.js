import Phaser from 'phaser'

export default class TitleScreen extends Phaser.Scene{

  create(){
    const title  = this.add.text(400, 200, 'Asteroid Blitz!', {
      fontSize: 38
    })
    title.setOrigin(0.5, 0.5)
  }

}
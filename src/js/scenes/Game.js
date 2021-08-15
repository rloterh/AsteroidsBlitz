import Phaser from 'phaser'

class Game extends Phaser.Scene{

  create(){
    this.add.text(400, 200, 'Game', {
      fontSize: 38
    })
    .setOrigin(0.5, 0.5)

    console.log('game scene')
  }

}

export default Game;
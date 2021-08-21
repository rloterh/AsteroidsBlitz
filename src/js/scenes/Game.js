import Phaser from 'phaser'

class Game extends Phaser.Scene{

  preload(){
    this.load.image('spaceship', './../../assets/ship.png')
    this.load.image('laser', './../../assets/laser.png')
  }

  create(){
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
    this.spaceShip = this.add.image(screenCenterX, screenCenterY, 'spaceship').setOrigin(0.5)

    this.laser = this.add.image(400, 200, 'laser')
  }

  update(){

  }

}

export default Game;
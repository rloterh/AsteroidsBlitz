import Phaser from 'phaser'

class Game extends Phaser.Scene{

  preload(){
    this.load.image('spaceship', './../../assets/ship.png')
    this.load.image('laser', './../../assets/laser.png')
    this.load.image('asteroid', './../../assets/asteroid.png')
  }

  create(){
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
    
    this.laser = this.add.sprite(screenCenterX, screenCenterY, 'laser')
    this.spaceShip = this.add.sprite(screenCenterX, screenCenterY, 'spaceship')

    this.input
  }

  update(){
    let shipAngle = Phaser.Math.Angle.Between(this.spaceShip.x,this.spaceShip.y,this.input.x,this.input.y)
    this.spaceShip.setRotation(shipAngle+Math.PI/2)
    
    let laserAngle = Phaser.Math.Angle.Between(this.laser.x,this.laser.y,this.input.x,this.input.y)
    this.laser.setRotation(shipAngle+Math.PI/2)
    
  }

}

export default Game;
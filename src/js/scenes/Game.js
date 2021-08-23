import Phaser from 'phaser'

class Game extends Phaser.Scene{

  preload(){
    this.load.image('spaceship', './../../assets/ship.png')
    this.load.image('laser', './../../assets/laser.png')
    this.load.image('asteroid', './../../assets/asteroid.png')
  }

  create(){
    this.control = false
    this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
    this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
    
    this.laser = this.physics.add.sprite(this.screenCenterX, this.screenCenterY, 'laser')
    this.spaceShip = this.physics.add.sprite(this.screenCenterX, this.screenCenterY, 'spaceship')

    this.asteroid = this.physics.add.sprite(Phaser.Math.Between(0, this.game.config.width), Phaser.Math.Between(0, this.game.config.height), 'asteroid')

    this.mInput = this.input
    this.mClick = this.input.mousePointer
    this.wBounds = this.physics.world.bounds
  }

  update(){
    let shipAngle = Phaser.Math.Angle.Between(this.spaceShip.x, this.spaceShip.y, this.mInput.x, this.mInput.y)
    this.spaceShip.setRotation(shipAngle + Math.PI/2)
    
    let laserAngle = Phaser.Math.Angle.Between(this.laser.x, this.laser.y, this.mInput.x, this.mInput.y)
    this.laser.setRotation(shipAngle + Math.PI/2)

    if (this.mClick.isDown && this.control == false){
      this.laser = this.physics.add.sprite(this.screenCenterX, this.screenCenterY,'laser')
      this.physics.moveTo(this.laser, this.mInput.x, this.mInput.y, 500)
      this.control = true
    }

    if (this.laser.x > this.wBounds.width || this.laser.y > this.wBounds.height || this.laser.x < 0 || this.laser.y < 0){
      this.control = false
    }

    this.physics.add.overlap(this.laser, this.asteroid, () => {
      this.asteroid.disableBody(true, true)
        this.laser.disableBody(true, true)
        this.control = false
      }, null, this)
  }

}

export default Game
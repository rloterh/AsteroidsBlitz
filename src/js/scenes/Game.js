import Phaser from 'phaser'

class Game extends Phaser.Scene{

  preload(){
    this.load.image('spaceship', './../../assets/ship.png')
    this.load.image('bullet', './../../assets/bullet.png')
  }

  create(){
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
    this.spaceShip = this.add.image(screenCenterX, screenCenterY, 'spaceship').setOrigin(0.5)

    this.spaceShip = this.add.image(400, 200, 'bullet')
    
  
    // this.spaceShip = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } })
    // const triangle = new Phaser.Geom.Triangle.BuildEquilateral(screenCenterX, screenCenterY, 50)
    // this.spaceShip.strokeTriangleShape(triangle).displayOriginX(0.5).displayOriginY(0.5)
    
  }

}

export default Game;
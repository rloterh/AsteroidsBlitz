import Phaser from 'phaser'

class Game extends Phaser.Scene{

  create(){
    this.spaceShip = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } })
    const triangle = new Phaser.Geom.Triangle.BuildEquilateral(100, 50, 50)

    this.spaceShip.strokeTriangleShape(triangle)



  }

}

export default Game;
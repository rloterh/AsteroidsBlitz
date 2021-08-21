import Phaser from 'phaser'

export default class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y){
    super(scene, x, y, 'laser')
  }

}
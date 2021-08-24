import Phaser from 'phaser'
import {TitleScreen} from '../consts/SceneKeys'

export default class Preload extends Phaser.Scene {
  preload(){
    this.load.image('spaceship', './../../assets/ship.png')
    this.load.image('laser', './../../assets/laser.png')
    this.load.image('asteroid', './../../assets/asteroid.png')
  }

  create() {     
      this.scene.start(TitleScreen)
  }
}
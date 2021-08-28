import Phaser from 'phaser'
import {TitleScreen} from '../consts/SceneKeys'
import * as e from '../consts/const'

export default class Preload extends Phaser.Scene {
  preload(){
    this.load.image('spaceship', './../../assets/ship.png')
    this.load.image('laser', './../../assets/laser.png')
    this.load.image('asteroid', './../../assets/asteroid.png')
  }

  create() {
    e.scoreForm.classList.remove('show-form')
    e.scoreForm.classList.add('hide-form')    
        
      this.scene.start(TitleScreen)
  }
}
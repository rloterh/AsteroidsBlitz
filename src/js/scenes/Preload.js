import Phaser from 'phaser'
import {TitleScreen} from '../consts/SceneKeys'

export default class Preload extends Phaser.Scene {
  preload(){
    
  }

  create() {     
      this.scene.start(TitleScreen)
  }
}
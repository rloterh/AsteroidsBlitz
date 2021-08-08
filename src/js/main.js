import Phaser from 'phaser'

import TitleScreen from './scenes/TitleScreen'
import * as SceneKeys from './consts/SceneKeys'

const config  = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
}

const game =  new Phaser.Game(config)

game.scene.add(SceneKeys.TitleScreen, TitleScreen)

game.scene.start(SceneKeys.TitleScreen)
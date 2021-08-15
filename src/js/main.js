import Phaser from 'phaser'
import Preload from './scenes/Preload'
import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import * as SceneKeys from './consts/SceneKeys'

const config  = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
}

const game =  new Phaser.Game(config)

game.scene.add(SceneKeys.Preload, Preload)
game.scene.add(SceneKeys.TitleScreen, TitleScreen)
game.scene.add(SceneKeys.Game, Game)

game.scene.start(SceneKeys.Preload)
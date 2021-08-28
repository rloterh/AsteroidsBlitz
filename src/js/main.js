import Phaser from 'phaser'
import Preload from './scenes/Preload'
import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import GameOver from './scenes/GameOver'
import LeaderBoard from './scenes/LeaderBoard'
import * as SceneKeys from './consts/SceneKeys'

const config  = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics:{
    default:'arcade',
    arcade:{
        gravity:{y:0}
    }
  },
  dom: {
    createContainer: true
  },
  autoCenter: true,
}

const game =  new Phaser.Game(config)

game.scene.add(SceneKeys.Preload, Preload)
game.scene.add(SceneKeys.TitleScreen, TitleScreen)
game.scene.add(SceneKeys.Game, Game)
game.scene.add(SceneKeys.GameOver, GameOver)
game.scene.add(SceneKeys.LeaderBoard, LeaderBoard)

game.scene.start(SceneKeys.Preload)
import Phaser from 'phaser'
import {setScore} from '../api/api'
import {LeaderBoard} from '../consts/SceneKeys'
import * as e from '../consts/const'

export default class GameOver extends Phaser.Scene {

  create(data) {
    this.playerScore = data.score
    e.scoreForm.classList.remove('hide-form')
    e.scoreForm.classList.add('show-form')

    e.scoreForm.addEventListener('submit', this.persistData)

    let titleText = 'Game Over'
    this.add.text(400, 120, titleText, {
      fontSize: 38
    }).setOrigin(0.5)

    this.add.text(this.scale.width * 0.5, this.scale.height * 0.3,
      `Final score: ${this.playerScore}`,
        { fontSize: 24 },
      ).setOrigin();
  }

  persistData = async (e) => {
   e.preventDefault()
   const userName = document.querySelector('#myText')
   await setScore({ user: userName.value, score: this.playerScore })
   this.scene.start(LeaderBoard)
   userName.value = ''
  }
}

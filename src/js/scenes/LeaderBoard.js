import Phaser from 'phaser';
import { TitleScreen } from '../consts/SceneKeys';
import { getScores } from '../api/api';
import * as e from '../consts/const';

export default class LeaderBoard extends Phaser.Scene {
  create() {
    e.scoreForm.classList.remove('show-form');
    e.scoreForm.classList.add('hide-form');
    e.ul.classList = 'class-table show-form';
    e.ul.classList.remove('hide-form');

    const titleText = 'Leader Board';
    this.add.text(400, 160, titleText, {
      fontSize: 38,
    }).setOrigin(0.5);

    (async () => {
      const { result } = await getScores();
      this.displayScores(result);
    })();

    this.add.text(400, 500, '*Press space to continue..*').setOrigin(0.5);

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start(TitleScreen);
    });
  }

  displayScores = (result) => {
    e.ul.innerHTML = '';
    result.sort((a, b) => b.score - a.score);
    result.forEach(({ user, score }) => {
      const li = document.createElement('li');
      li.textContent = `${user}   ..................    ${score}`;
      e.ul.appendChild(li);
    });
    e.ul.classList.add('border');
  }
}

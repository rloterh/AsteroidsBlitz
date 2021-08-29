import Phaser from 'phaser';
import { GameOver } from '../consts/SceneKeys';

class Game extends Phaser.Scene {
  constructor() {
    super();

    this.score = 0;
  }

  create() {
    this.control = false;
    this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.laser = this.physics.add.sprite(this.screenCenterX, this.screenCenterY, 'laser');
    this.spaceShip = this.physics.add.sprite(this.screenCenterX, this.screenCenterY, 'spaceship');

    this.createAsteroid();

    this.mInput = this.input;
    this.mClick = this.input.mousePointer;
    this.wBounds = this.physics.world.bounds;

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
  }

  update() {
    const shipAngle = Phaser.Math.Angle.Between(
      this.spaceShip.x, this.spaceShip.y, this.mInput.x, this.mInput.y,
    );
    this.spaceShip.setRotation(shipAngle + Math.PI / 2);
    this.laser.setRotation(shipAngle + Math.PI / 2);

    if (this.mClick.isDown && this.control === false) {
      this.laser = this.physics.add.sprite(this.screenCenterX, this.screenCenterY, 'laser');
      this.physics.moveTo(this.laser, this.mInput.x, this.mInput.y, 500);
      this.control = true;
    }

    if (this.laser.x > this.wBounds.width || this.laser.y > this.wBounds.height
       || this.laser.x < 0 || this.laser.y < 0) {
      this.control = false;
    }

    this.physics.add.overlap(this.laser, this.asteroid, () => {
      this.asteroid.disableBody(true, true);
      this.laser.disableBody(true, true);
      this.control = false;
      this.calcScore();
      this.createAsteroid();
    }, null, this);

    this.physics.add.overlap(this.asteroid, this.spaceShip, () => {
      this.asteroid.disableBody(true, true);
      this.spaceShip.disableBody(true, true);
      this.laser.disableBody(true, true);
      this.control = true;
      this.gameOver();
    }, null, this);

    this.asteroidAttack();
  }

  createAsteroid() {
    this.asteroid = this.physics.add.sprite(Phaser.Math.Between(0, this.game.config.width), Phaser.Math.Between(0, this.game.config.height), 'asteroid');
    if (this.asteroid.x > 300 && this.asteroid.x <= 400) {
      this.asteroid.x = 200;
    } else if (this.asteroid.x > 400 && this.asteroid.x <= 500) {
      this.asteroid.x = 600;
    }

    if (this.asteroid.y > 240 && this.asteroid.y <= 300) {
      this.asteroid.x = 180;
    } else if (this.asteroid.x > 300 && this.asteroid.x <= 380) {
      this.asteroid.x = 420;
    }
  }

  asteroidAttack() {
    const asteroidSpeed = Phaser.Math.Between(100, 200);
    this.physics.moveToObject(this.asteroid, this.spaceShip, asteroidSpeed);
  }

  calcScore() {
    this.score += 20;
    this.scoreText.setText(`Score: ${this.score}`);
  }

  gameOver() {
    this.scene.start(GameOver, {
      score: this.score,
    });
  }
}

export default Game;
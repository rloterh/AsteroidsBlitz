import Phaser from 'phaser';
import TitleScreen from '../js/scenes/TitleScreen';

it('works', () => {
  expect(1).toEqual(1);
});

test('TitleScreen is a subclass of container', () => {
  expect(TitleScreen.prototype instanceof Phaser.Scene).toBe(true);
});

test('BaseScene is not a subclass of container', () => {
  expect(TitleScreen.prototype instanceof Phaser.GameObjects.Container).toBe(
    false,
  );
});

import player from 'play-sound';
import App from '../App.js';

export default class SoundManager {
  static playAlert() {
    if (App.isDebug()) {
      return;
    }

    player().play('assets/alert.wav');
  }
}

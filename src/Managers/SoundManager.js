import player from 'play-sound';
import { app } from '../App.js';

export default class SoundManager {
  static instance = null;

  static playAlert() {
    if (app.isDebug()) {
      return;
    }

    player().play('assets/alert.wav');
  }

  static getInstance() {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }
}

import { SoundManager, ScreenManager } from './index.js';

export default class LockManager {
  static lockScreen() {
    SoundManager.playAlert();
    ScreenManager.lock();
  }
}

import { SoundManager, ScreenManager } from '../Managers/index.js';

export default class LockService {
  foo = 'bar';

  lockScreen() {
    SoundManager.playAlert();
    ScreenManager.lock();

    this.foo = 'test';
  }
}

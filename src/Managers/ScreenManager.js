import nodeCmd from 'node-cmd';
import App from '../App.js';
import LoggerManager from './LoggerManager.js';

export default class ScreenManager {
  static lock() {
    if (App.isDebug()) {
      LoggerManager.log('Screen has been locked');
      return;
    }

    nodeCmd.run('Rundll32.exe user32.dll,LockWorkStation');
  }
}

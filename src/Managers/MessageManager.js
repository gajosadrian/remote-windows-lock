import nodeCmd from 'node-cmd';
import App from '../App.js';
import LoggerManager from './LoggerManager.js';

export default class MessageManager {
  static send(message) {
    if (App.isDebug()) {
      LoggerManager.log(message);
      return;
    }

    nodeCmd.run(`msg Admin ${message}`);
  }
}

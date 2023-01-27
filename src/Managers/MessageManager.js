import nodeCmd from 'node-cmd';
import App from '../App.js';

export default class MessageManager {
  static instance = null;

  send(message) {
    if (App.isDebug()) {
      console.debug(`DEBUG: ${message}`);
    } else {
      nodeCmd.run(`msg Admin ${message}`);
    }
  }

  static getInstance() {
    if (!MessageManager.instance) {
      MessageManager.instance = new MessageManager();
    }
    return MessageManager.instance;
  }
}

import printMessage from 'print-message';

export default class MessageManager {
  static log(message) {
    const date = (new Date()).toLocaleString();
    printMessage([`${date}: ${message}`]);
  }
}

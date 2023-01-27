export default class App {
  static instance = null;

  static isDebug() {
    return process.env.DEBUG === 'true';
  }

  static getInstance() {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }
}

export const app = App.getInstance();

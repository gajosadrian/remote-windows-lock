import SoundManager from './SoundManager.js'
import ScreenManager from './ScreenManager.js'

export default class App {
    static instance = null

    isDebug() {
        return process.env.DEBUG === 'true'
    }

    lockScreen() {
        SoundManager.getInstance().playAlert()
        ScreenManager.getInstance().lock()
    }

    static getInstance() {
        if (!App.instance) {
            App.instance = new App()
        }
        return App.instance
    }
}

export const app = App.getInstance()
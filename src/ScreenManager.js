import nodeCmd from 'node-cmd'
import { app } from './App.js'

export default class ScreenManager {
    static instance = null

    lock() {
        if (app.isDebug()) {
            console.debug('DEBUG: Screen has been locked')
        } else {
            nodeCmd.run('Rundll32.exe user32.dll,LockWorkStation')
        }
    }

    static getInstance() {
        if (!ScreenManager.instance) {
            ScreenManager.instance = new ScreenManager()
        }
        return ScreenManager.instance
    }
}
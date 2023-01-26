import * as dotenv from 'dotenv'
import App from './App.js'

dotenv.config()

const app = App.getInstance()
app.lockScreen()

import * as dotenv from 'dotenv';
import App from './App.js';
import LockService from './Services/LockService.js';

dotenv.config();

const app = App.getInstance();
const lockService = new LockService();

lockService.lockScreen();

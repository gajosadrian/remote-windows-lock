import * as dotenv from 'dotenv';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import App from './App.js';
import LockService from './Services/LockService.js';

dotenv.config();
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

const app = App.getInstance();
const lockService = new LockService();

lockService.lockScreen();

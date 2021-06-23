require('dotenv').config();
const express = require('express');
const routers = require('../routes');
const app = express();
const strategyAuthentication = require('../utils/authentication/strategyAuthentication');

routers(app);

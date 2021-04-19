const express = require('express');
const routers = require('../routes');
const app = express();
const port = 3333;



app.listen(3333, () => console.log(`Serve running in port ${port}`))
const strategyAuthentication = require('../utils/strategyAuthentication');

routers(app);

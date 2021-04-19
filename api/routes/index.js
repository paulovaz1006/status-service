const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');
const clientRoutes = require('./clientRoutes');
const serviceRoutes = require('./serviceRoutes');
const loginRoutes = require('./loginRoutes');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(userRoutes);
    app.use(clientRoutes);
    app.use(serviceRoutes);
    app.use(loginRoutes);
}
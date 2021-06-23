const bodyParser = require('body-parser');
const userRoutes = require('./userRoutes');
const clientRoutes = require('./clientRoutes');
const serviceRoutes = require('./serviceRoutes');
const loginRoutes = require('./loginRoutes');
const port = 3333;

module.exports = app => {
    app.use(bodyParser.json());
    app.listen(port, () => console.log(`Serve running in port ${port}`));    
    app.use(userRoutes);
    app.use(clientRoutes);
    app.use(serviceRoutes);
    app.use(loginRoutes);    
}
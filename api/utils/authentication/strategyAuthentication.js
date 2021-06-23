const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer')
const LoginController = require('../../controllers/LoginController');
const loginController = new LoginController();
const jwt = require('jsonwebtoken');

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, async (email, password, done) => {
        try {
            const searchUser = await loginController.searchUser(email);
            
            loginController.verifyUser(searchUser);

            await loginController.verifyPassword(password, searchUser.password);

            done(null, searchUser)
        } catch(error) {
            done(error)
        }        
    })
);

passport.use(
    new BearerStrategy (
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.JWT_KEY);
                const user = await loginController.searchId(payload.id);
                done(null, user);
            } catch(error) {
                done(error);
            }            
        }
    )
)
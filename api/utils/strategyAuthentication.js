const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserController = require('../controllers/UserController');

module.exports = () => {
    const verifyUser = (user) => {
        if (!user) {
            throw new Error('Usuário não encontrado');
        } 
    }
    
    const verifyPassword = async (password, comparePassword) => {
        const passwordValid = await bcrypt.compare(password, comparePassword);
    
        if (!passwordValid) {
            throw new Error('E-mail ou senha invalido')
        }
    }
    
    passport.use(
        new LocalStrategy({
            userNameField: 'email',
            passwordField: 'password',
            session: false
        }, async (email, password, done) => {
            try {
                const searchUser = await UserController.searchUser(email);
                verifyUser(searchUser);
                await verifyPassword(password);
    
                done(null, searchUser)
            } catch(error) {
                done(error)
            }        
        })
    )
    
}

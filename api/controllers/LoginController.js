const LoginModel = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class LoginController {
    login(req, res) {
        const token = LoginController.createTokenJWT(req.user)
        res.set('Authorization', token);
        res.status(204).send();
    }

    verifyUser(user) {        
        if (!user) {
            throw new Error('Usuário não encontrado');
        } 
    }

    async searchUser(email) {    
        try {
            const registerUser = await LoginModel.users.findOne({
                where: {
                    email: email
                }
            });
            
           return registerUser;
        } catch (error) {
            return error.message;
        }
    }   

    async searchId(id) {
        try {
            const searchId = await LoginModel.users.findOne({
                where: {
                    id: id
                }
            });
            
           return searchId;
        } catch (error) {
            return error.message;
        }
    }

    async verifyPassword(password, comparePassword) {
        const passwordValid = await bcrypt.compare(password, comparePassword);

        if (!passwordValid) {
            throw new Error('E-mail ou senha invalido')
        }
    }

    static createTokenJWT(user) {
        const payload = {
            id: user.id
        };

        const token = jwt.sign(payload, 'secret-password');
        return token;
    }
}

module.exports = LoginController;
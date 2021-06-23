const UserModel = require('../models');
const bcrypt = require('bcrypt');

class UserController {
    static generatePassword(password) {
        const costHash = 12;
        return bcrypt.hash(password, costHash)
    }

    async registerUser(req, res) {
        const data = req.body;
        const { name, password } = req.body;
        const cryptPassword =  await UserController.generatePassword(password)

        data['password'] = cryptPassword;

        try {
            
            const registerUser = await UserModel.users.create(data);
            
            res.status(201).json({ message:`Usuário ${name} criado com sucesso`});
        } catch (error) {
            res.status(400).json(error.message);
        }
    }    
}

module.exports = UserController;
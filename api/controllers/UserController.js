const UserModel = require('../models');
const bcrypt = require('bcrypt');

class UserController {
    static generatePassword(password) {
        const costHash = 12;
        return bcrypt.hash(password, costHash)
    }

    static async registerUser(req, res) {
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

    static async searchUser(email) {
        try {
            const registerUser = await UserModel.users.findOne({
                where: {
                    email: email
                }
            });
            
            res.status(201).json(registerUser);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    static login(req, res) {
        console.log('rej')
        res.status(204).send();
    }
}

module.exports = UserController;
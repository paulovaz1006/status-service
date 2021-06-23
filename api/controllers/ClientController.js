const ClientModel = require('../models');

class ClientController { 
    async registerClient(req, res) {
        const data = {
            name: 'teste',
            phone: 123123,
            user_id: 1
        };
        
        const createClient = await ClientModel.clients.create(data);

        try {
            res.status(201).json({message: 'Cliente Criado com sucesso'});
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    async searchClient(req, res) {
        const { id } = req.params;
        const searchClient = await ClientModel.clients.findOne({
            where: {
                id: Number(id)
            }
        });

        try {
            res.status(201).json(searchClient);
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}

module.exports = ClientController;
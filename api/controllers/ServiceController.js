const ModelService = require('../models');

class ServiceController {
    static async registerService(req, res) {
        const data = req.body;        
        const searchPhone = await ModelService.clients.findOne({
            where: {
                phone: data.phone
            }
        });
        
        if (searchPhone) {    
            data['client_id'] = searchPhone.dataValues.id;                
        } else {
            const client = {
                phone: data.phone,
                name: data.client_name,
                user_id: data.user_id
            }
            const createClient = await ModelService.clients.create(client);

            data['client_id'] = createClient.id;                
        }

        delete data['phone'];
        delete data['client_name'];

        try {
            const createService = await ModelService.services.create(data);

            res.status(201).json({createService, message: 'Serviço Cadastrado com sucesso'});
        } catch (error) {
            res.status(400).json(error.message)
        }            
    }

    static async updateService(req, res) {
        const { id } = req.params;
        const { status_id } = req.body;

        const alterStatus = await ModelService.services.update(status_id, {
            where: {
                id: Number(id)
            }
        });

        try {
            res.status(200).json({message: 'Status alterado com sucesso'})
        } catch(error) {
            res.status(400).json(error);
        }
    }
}

module.exports = ServiceController;
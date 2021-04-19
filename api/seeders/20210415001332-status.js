'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('status', [
      {
        status: 'Na Fila',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Em Andamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Aguardando Retirada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Aguardando Pagamento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Entregue',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

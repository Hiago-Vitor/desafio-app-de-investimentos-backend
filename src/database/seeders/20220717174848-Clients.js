'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [
        {
          name: 'teste',
          email: 'test@test.com',
          password: 'password',
          balance: 1000.49
        },
        {
          name: 'teste-2',
          email: 'other@test.com',
          password: 'password',
          balance: 700.49
        },
      ],
      { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
      { timestamps: false }, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};

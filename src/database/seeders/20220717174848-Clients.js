'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [
        {
          name: 'teste',
          email: 'test@test.com',
          password: '$2a$05$LEOfuTQg5aJPmy0oBymrie4YPatRMrWnMg7DeG4f4m92dFJjmR8He',
          balance: 1000.49
        },
        {
          name: 'teste-2',
          email: 'other@test.com',
          password: '$2a$05$rzDq2iWC0ErZJgmzUl96b.ziHOErNRNOkAIwabs1BHPpb8CwngLOG',
          balance: 700.49
        },
      ],
      { timestamps: false });
  },
// $2a$05$FiB8TDHFl9s/0HtC7W6g0ubSi5GYE5cOE7ygBfYcrB5G2OcJ2Ylai
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};

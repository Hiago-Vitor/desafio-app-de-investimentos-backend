'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
      [
        {
          tag: 'RRRP3',
          quantity: 93,
          price: 28.74
        },
        {
          tag: 'ALPA4',
          quantity: 95,
          price: 17.98
        },
        {
          tag: 'ABEV3',
          quantity: 93,
          price: 14.59
        },
        {
          tag: 'AMER3',
          quantity: 95,
          price: 16.32
        },
        {
          tag: 'ASAI3',
          quantity: 90,
          price: 15.58
        },
        {
          tag: 'AZUL4',
          quantity: 100,
          price: 12.19
        },
        {
          tag: 'B3SA3',
          quantity: 100,
          price: 10.03
        },
        {
          tag: 'BPAN4',
          quantity: 100,
          price: 6.21
        },
        {
          tag: 'BBSE3',
          quantity: 100,
          price: 27.50
        },
        {
          tag: 'BRML3',
          quantity: 100,
          price: 7.57
        },
      ],
      { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  }
};

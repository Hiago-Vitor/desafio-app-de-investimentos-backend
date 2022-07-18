'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ClientAssets',
      [
        {
          codClient: 1,
          codAsset: 1,
          qtdPurchased: 7
        },
        {
          codClient: 1,
          codAsset: 2,
          qtdPurchased: 5
        },
        {
          codClient: 2,
          codAsset: 3,
          qtdPurchased: 7
        },
        {
          codClient: 2,
          codAsset: 4,
          qtdPurchased: 5
        },
        {
          codClient: 1,
          codAsset: 5,
          qtdPurchased: 5
        },
        {
          codClient: 2,
          codAsset: 5,
          qtdPurchased: 5
        }
      ],
      { timestamps: false }, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ClientAssets', null, {});
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('SoldAssets',
      [
        {
          codAsset: 1,
          codClient: 1,
          qtdPurchased: 7
        },
        {
          codAsset: 2,
          codClient: 1,
          qtdPurchased: 5
        },
        {
          codAsset: 3,
          codClient: 2,
          qtdPurchased: 7
        },
        {
          codAsset: 4,
          codClient: 2,
          qtdPurchased: 5
        },
        {
          codAsset: 5,
          codClient: 1,
          qtdPurchased: 5
        },
        {
          codAsset: 5,
          codClient: 2,
          qtdPurchased: 5
        }
      ],
      { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('SoldAssets', null, {});
  }
};

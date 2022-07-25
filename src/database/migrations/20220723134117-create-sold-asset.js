"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SoldAssets", {
      codAsset: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Assets",
          key: "idAsset"
        },
        onDelete: "CASCADE"
      },
      codClient: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "idClient"
        },
        onDelete: "CASCADE"
      },
      qtdPurchased: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("SoldAssets");
  }
};
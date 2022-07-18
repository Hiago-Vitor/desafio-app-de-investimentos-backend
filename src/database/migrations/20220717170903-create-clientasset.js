'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ClientAssets", {
      codClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "idClient",
        },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      codAsset: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Assets",
          key: "idAsset",
        },
        onDelete: "CASCADE",
        primaryKey: true,
      },
      qtdPurchased: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ClientAssets");
  }
};
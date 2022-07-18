module.exports = (sequelize, DataTypes) => {
  const ClientAssetTable = sequelize.define("ClientAsset",{
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    qtdPurchased: DataTypes.INTEGER
  }, { timestamps: false });

  ClientAssetTable.associate = (models) => {
    models.Client.belongsToMany(models.Assets, {
      as: 'assets',
      through: ClientAssetTable,
      foreingnKey: 'codClient',
      otherKey: 'codAsset'
    });

    models.Asset.belongsToMany(models.Clients, {
      as: 'clients',
      through: ClientAssetTable,
      foreingnKey: 'codAsset',
      otherKey: 'codClient'
    });
  };

  return ClientAssetTable;
};
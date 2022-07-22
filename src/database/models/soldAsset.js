module.exports = (sequelize, DataTypes) => {
  const SoldAssetTable = sequelize.define("SoldAsset", {
    codAsset: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    codClient: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    qtdPurchased: DataTypes.INTEGER
  }, { timestamps: false });

  SoldAssetTable.associate = (models) => {
    models.Asset.belongsToMany(models.Client, {
      as: 'clients',
      through: SoldAssetTable,
      foreignKey: 'codAsset',
      otherKey: 'codClient'
    });

    models.Client.belongsToMany(models.Asset, {
      as: 'assets',
      through: SoldAssetTable,
      foreignKey: 'codClient',
      otherKey: 'codAsset'
    });
  }
  return SoldAssetTable;
};
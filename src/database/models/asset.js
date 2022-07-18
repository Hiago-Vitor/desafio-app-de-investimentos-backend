module.exports = (sequelize, DataTypes) => {
  const AssetTable = sequelize.define("Asset", {
    idAsset: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    tag: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    price: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  }, { timestamps: false });
  
  AssetTable.associate = (models) => {
    AssetTable.hasMany(models.ClientAsset, { as: 'clientAssets', foreignKey: 'codAsset' })
  }

  return AssetTable;
};
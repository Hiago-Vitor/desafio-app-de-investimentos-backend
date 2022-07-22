module.exports = (sequelize, DataTypes) => {
  const ClientTable = sequelize.define("Client", {
    idClient: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  }, { timestamps: false });

  return ClientTable;
};

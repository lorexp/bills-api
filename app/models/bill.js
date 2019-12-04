module.exports = (sequelize, DataTypes) => {
  const bill = sequelize.define(
    "bill",
    {
      descricao: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      data: DataTypes.DATE
    },
    {
      freezeTableName: true
    }
  );

  return bill;
};

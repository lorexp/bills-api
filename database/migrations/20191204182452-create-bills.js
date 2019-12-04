module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("bill", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING
      },
      valor: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      data: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("bill");
  }
};

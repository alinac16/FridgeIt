module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    weight: {
      type: Sequelize.FLOAT,
      allowNull: false,

      validate: { min: 0 },
    },
    bought: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    dateStored: {
      type: "TIMESTAMP",
      allowNull: true,
      defaultValue: null,
    },
  });

  return Product;
};

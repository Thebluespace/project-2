module.exports = function(sequelize, DataTypes) {
    var Quotes = sequelize.define("Quotes", {
      quote: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING
      },
      image: {
          type: DataTypes.STRING,
      }

    });
  
    return Quotes;
  };
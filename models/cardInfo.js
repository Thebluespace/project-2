module.exports = function(sequelize, DataTypes) {
    var CardInfo = sequelize.define("CardInfo", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 55]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      phone: {
          type: DataTypes.INTEGER,
          allowNull: false,
          len: [1, 10]
      },
      website: {
          type: DataTypes.STRING
      },
      quote: {
        type: DataTypes.TEXT
      },
      bgcolor: {
        type: DataTypes.STRING,
        defaultValue: "Default"
      }
    });
  
    CardInfo.associate = function(models) {
      // We're saying that  CardInfo should belong to a User
      // CardInfo can't be created without a User due to the foreign key constraint
      CardInfo.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return CardInfo;
  };
  
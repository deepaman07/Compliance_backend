module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "states",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      State: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      UpdatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "states",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
  const City = sequelize.define(
    "city",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      City: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      StateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      CreatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      UpdatedAt: {
        type: DataTypes.DATE(),
        allowNull: false,
        defaultValue: sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "city",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
  return { State, City };
};

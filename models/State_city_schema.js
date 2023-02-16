module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "states",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      state: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: "state_UNIQUE",
      },
      is_active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        type: DataTypes.DATE(),
      },
      updated_at: {
        type: DataTypes.DATE(),
      },
    },
    {
      sequelize,
      tableName: "states",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "state_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "state" }],
        },
      ],
    }
  );
  const City = sequelize.define(
    "city",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      city: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        type: DataTypes.DATE(),
      },
      updated_at: {
        type: DataTypes.DATE(),
      },
    },
    {
      sequelize,
      tableName: "city",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
  return { State, City };
};

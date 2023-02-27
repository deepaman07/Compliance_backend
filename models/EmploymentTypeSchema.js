module.exports = (sequelize, DataTypes) => {
  const employment_types = sequelize.define(
    "employmenttypes",
    {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      EmploymentType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
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
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return employment_types;
};

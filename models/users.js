'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsTo(models.role, {
        foreignKey: 'role',
        as: 'role_name'
      })

      users.belongsTo(models.occupations, {
        foreignKey: 'occupation_id',
        as: 'occ'
      })
    }
  }
  users.init({
    role: DataTypes.INTEGER,
    email: DataTypes.STRING,
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    occupation_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    affiliation: DataTypes.STRING,
    reviewer_id: DataTypes.INTEGER,
    enable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
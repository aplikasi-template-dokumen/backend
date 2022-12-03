'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class templates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      templates.belongsTo(models.submission_status, {
        foreignKey: 'status_id',
        as: 'status'
      })

      templates.belongsTo(models.users, {
        foreignKey: 'contributor_id',
        as: 'contributor'
      })

      templates.belongsTo(models.categories, {
        foreignKey: 'cat_id',
        as: 'cat'
      })

      templates.belongsTo(models.sub_categories, {
        foreignKey: 'sub_cat_id',
        as: 'sub_cat'
      })
    }
  }
  templates.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    lang_id: DataTypes.INTEGER,
    cat_id: DataTypes.INTEGER,
    sub_cat_id: DataTypes.INTEGER,
    img: DataTypes.STRING,
    notes: DataTypes.STRING,
    data: DataTypes.JSON,
    status_id: DataTypes.INTEGER,
    contributor_id: DataTypes.INTEGER,
    reviewer_id: DataTypes.INTEGER,
    publish_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'templates',
  });
  return templates;
};
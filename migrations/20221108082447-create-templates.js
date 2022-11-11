'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      lang_id: {
        type: Sequelize.INTEGER
      },
      cat_id: {
        type: Sequelize.INTEGER
      },
      sub_cat_id: {
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.JSON
      },
      status_id: {
        type: Sequelize.INTEGER
      },
      contributor_id: {
        type: Sequelize.INTEGER
      },
      reviewer_id: {
        type: Sequelize.INTEGER
      },
      publish_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('templates');
  }
};
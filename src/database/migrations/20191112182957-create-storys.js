'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('storys', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        id_user: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        historia: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE, 
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE, 
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('storys');
  }
};

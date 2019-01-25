'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, BIGINT, INTEGER, DATE } = Sequelize;
    await queryInterface.createTable('user', {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: STRING(30),
        allowNull: false,
        unique: true,
      },
      password: {
        type: STRING(16),
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('user');
  }
};

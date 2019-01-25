'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
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

  return User;
};
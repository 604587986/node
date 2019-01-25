'use strict';

const fecha = require('fecha');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548295380000_2983';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    database: 'wangyong',
    username: "root",
    password: "root",
    define: {
      freezeTableName: true,
      underscored: true,
      getterMethods: {
        created_at() {
          const created_at = this.getDataValue('created_at');
          if (created_at) {
            return fecha.format(created_at, 'YYYY-MM-DD HH:mm:ss');
          }
        },
        updated_at() {
          const updated_at = this.getDataValue('updated_at');
          if (updated_at) {
            return fecha.format(updated_at, 'YYYY-MM-DD HH:mm:ss');;
          }
        },
      }
    }
  };

  config.jwt = {
    secret: "123456"
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 中间件
  config.middleware = ['auth'];

  return config;
};

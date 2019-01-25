'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.index);
  router.post('/login', controller.user.login);
  router.get('/getUserInfo', controller.user.getUserInfo);
};

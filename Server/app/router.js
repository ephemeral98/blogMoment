'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/users', controller.users);
  router.resources('tags', '/tags', controller.tags);
  router.resources('articles', '/articles', controller.articles);
  router.resources('dailyWords', '/dailyWords', controller.dailyWords);
  router.resources('comment', '/comment', controller.comment);

  // 构造出数据库表结构：
  app.beforeStart(async () => {
    await app.model.sync({ alter: true }); //force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
  });
};

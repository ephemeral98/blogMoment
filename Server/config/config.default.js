/* eslint valid-jsdoc: "off" */
// 参考： https://juejin.cn/post/6844903842367143950

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'blog_moment',
    username: 'root',
    password: '',
    // 配置数据库时间为东八区北京时间
    timezone: '+08:00',
    operatorsAliases: false,
    defaultCharset: 'utf8',
    
    dialectOptions: {
      charset: 'utf8', // 防止中文乱码
      dateStrings: true,
      collate: 'utf8_general_ci',
      options: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          // 返回正确得时间
          return field.string();
        }
        return next();
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1642775364198_9133';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

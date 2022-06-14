module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define(
    'Users',
    {
      id: {
        type: INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        created_at: DATE,
        updated_at: DATE,
      },
      /**
       * 姓名
       */
      name: {
        type: STRING(20),
        allowNull: true,
        default: '游客',
      },

      /**
       * 年龄
       */
      age: {
        type: INTEGER(4),
      },

      /**
       * 评论
       */
      commentId: {
        type: INTEGER(11),
      },

      /**
       * 每日一句
       */
      dailyWordsId: {
        type: STRING(600),
      },
    },
    {
      tableName: 'users',
      createAt: true, // 创建一个 创建时间
      updateAt: true, // 创建一个 更新时间
      deleteAt: '已删除', // 显示假删除的文本
      paranoid: true, // 是否假删除
    }
  );

  Users.associate = () => {
    // 与 评论 存在 一对多 的关系
    app.model.Users.hasMany(app.model.Comment, {
      foreignKey: 'commentId',
      target: 'id',
    });

    // 与 每日一句 存在 一对多 的关系
    app.model.Users.hasMany(app.model.DailyWords, {
      foreignKey: 'dailyWordsId',
      target: 'id',
    });
  };

  return Users;
};

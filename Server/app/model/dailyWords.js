// 每日一句
module.exports = (app) => {
  const { STRING, TEXT, INTEGER } = app.Sequelize;
  const DailyWords = app.model.define(
    'DailyWords',
    {
      id: {
        type: INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        create_at: true,
        update_at: true,
      },
      /**
       * 内容
       */
      content: {
        type: STRING(100),
      },

      /**
       * 用户id
       */
      userId: {
        type: INTEGER(11),
        allowNull: false,
      },
    },
    {
      tableName: 'daily_words',
      createdAt: true,
      updatedAt: true,
      deletedAt: '已删除!',
      paranoid: true,
    }
  );

  DailyWords.associate = () => {
    // 与 Users 存在多对一的关系，所以使用belongsTo()
    app.model.DailyWords.belongsTo(app.model.Users, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };

  return DailyWords;
};

// 每日一句
module.exports = (app) => {
  const { STRING, TEXT, INTEGER } = app.Sequelize;
  const dailyWords = app.model.define(
    'dailyWords',
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

  dailyWords.associate = () => {
    // 与 user 存在多对一的关系，所以使用belongsTo()
    app.model.dailyWords.belongsTo(app.model.user, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };
};

// 标签

module.exports = (app) => {
  const { INTEGER, STRING } = app.Sequelize;
  const Comment = app.model.define(
    'comment',
    {
      id: {
        type: INTEGER(11),
        primaryKey: true,
        create_at: true,
        update_at: true,
        autoIncrement: true,
      },
      /**
       * 评论内容
       */
      content: {
        type: STRING,
        allowNull: false,
      },

      /**
       * 层主
       */
      parent: {
        type: INTEGER(11),
        allowNull: false,
      },

      /**
       * 回复谁的
       */
      toWho: {
        type: INTEGER(11),
        allowNull: true,
      },

      /**
       * 用户id
       */
      userId: {
        type: INTEGER(11),
        allowNull: true, // 如果是游客，则没有用户id
      },
    },
    {
      tableName: 'comments',
      createdAt: true,
      updatedAt: true,
      deletedAt: '已删除!',
      paranoid: true,
    }
  );

  Comment.associate = () => {
    // 与 Users 存在多对一的关系，所以使用belongsTo()
    app.model.Comment.belongsTo(app.model.Users, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };

  return Comment;
};

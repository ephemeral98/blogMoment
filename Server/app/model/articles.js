// 文章

module.exports = (app) => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Articles = app.model.define(
    'articles',
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
       * 标题
       */
      title: {
        type: STRING(20),
        allowNull: true,
        default: '标题',
      },

      /**
       * 内容
       */
      content: {
        type: TEXT('long'),
        allowNull: true,
      },

      /**
       * 文章字数
       */
      words: {
        type: INTEGER(11),
        allowNull: true,
        default: 0,
      },

      /**
       * 阅读次数
       */
      watch: {
        type: INTEGER(11),
        allowNull: true,
        default: 0,
      },

      /**
       * 点赞（喜欢）人数
       */
      like: {
        type: INTEGER(11),
        allowNull: true,
        default: 0,
      },

      /**
       * 置顶权重
       */
      top: {
        type: INTEGER(11),
        allowNull: true,
      },

      /**
       * 占位图
       */
      face: {
        type: STRING(50),
        allowNull: true,
      },

      /**
       * 标签id
       */
      tag_id: {
        type: INTEGER(11),
      },
    },
    {
      tableName: 'articles',
      createAt: true, // 创建一个 创建时间
      updateAt: true, // 创建一个 更新时间
      deleteAt: '已删除', // 显示假删除的文本
      paranoid: true, // 是否假删除
    }
  );

  Articles.associate = () => {
    // 与 articles 存在多对多的关系，所以是belongsToMany()
    app.model.Articles.belongsToMany(app.model.Tags, {
      through: 'articles-tags',
      foreignKey: 'articleId',
      otherKey: 'tagId',
    });
  };

  return Articles;
};

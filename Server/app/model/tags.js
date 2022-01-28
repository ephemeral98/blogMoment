module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Tags = app.model.define(
    'tags',
    {
      id: {
        type: INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        created_at: DATE,
        updated_at: DATE,
      },
      name: {
        type: STRING(20),
        allowNull: false,
      },
      articleId: {
        type: INTEGER(4),
        allowNull: false,
      },
    },
    {
      tableName: 'tags',
      createAt: true, // 创建一个 创建时间
      updateAt: true, // 创建一个 更新时间
      deleteAt: '已删除', // 显示假删除的文本
      paranoid: true, // 是否假删除
    }
  );

  Tags.associate = () => {
    // 与 articles 存在多对多的关系，所以是belongsToMany()
    app.model.Tags.belongsToMany(app.model.Articles, {
      through: 'articles-tags',
      foreignKey: 'tagId',
      otherKey: 'articleId',
    });
  };

  return Tags;
};

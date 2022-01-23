/* indent size: 2 */

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Model = app.model.define(
    'user',
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
        allowNull: true,
        default: '游客',
      },
      age: {
        type: INTEGER(4),
        allowNull: true,
      },
    },
    {
      tableName: 'user',
      createAt: true, // 创建一个 创建时间
      updateAt: true, // 创建一个 更新时间
      deleteAt: '已删除', // 显示假删除的文本
      paranoid: true, // 是否假删除
    }
  );

  Model.associate = function () {};

  return Model;
};

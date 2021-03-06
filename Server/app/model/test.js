module.exports = {
  // The function called when performing a database upgrade, create a `users` table
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('test', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER,
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // The function called when performing a database downgrade, delete the `test` table
  down: async (queryInterface) => {
    await queryInterface.dropTable('test');
  },
};

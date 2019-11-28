module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students_disciplines', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        },
        allowNull: false
      },
      discipline_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'disciplines',
          key: 'id'
        }
      },
      hit: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      miss: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      present: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('students_disciplines');
  }
};

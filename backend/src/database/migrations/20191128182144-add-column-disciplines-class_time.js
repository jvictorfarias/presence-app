module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('disciplines', 'class_time', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('disciplines', 'class_time');
  }
};

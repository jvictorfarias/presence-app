import Sequelize, { Model } from 'sequelize';

class Discipline extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cod: Sequelize.STRING,
        time: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Teacher);
    this.hasMany(models.Student);
  }
}

export default Discipline;

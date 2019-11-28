import Sequelize, { Model } from 'sequelize';

class Discipline extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        cod: Sequelize.STRING,
        class_time: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Teacher, {
      foreignKey: 'teacher_id',
      as: 'teacher'
    });
    this.belongsToMany(models.Student, {
      through: 'students_disciplines',
      foreignKey: 'discipline_id',
      otherKey: 'student_id'
    });
  }
}

export default Discipline;

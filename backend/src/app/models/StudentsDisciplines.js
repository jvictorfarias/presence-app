import { Model, Sequelize } from 'sequelize';

class StudentsDisciplines extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.STRING,
        discipline_id: Sequelize.STRING,
        hit: Sequelize.INTEGER,
        miss: Sequelize.INTEGER,
        present: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'student_disc'
    });
    this.belongsTo(models.Discipline, {
      foreignKey: 'discipline_id',
      as: 'disc_student'
    });
  }
}

export default StudentsDisciplines;

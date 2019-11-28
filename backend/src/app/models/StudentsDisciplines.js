import { Model } from 'sequelize';

class StudentsDisciplines extends Model {
  static init(sequelize) {
    super.init(
      {},
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

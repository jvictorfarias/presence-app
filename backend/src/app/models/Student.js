import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        matriculation: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        register: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    this.addHook('beforeSave', async student => {
      if (student.password) {
        student.password_hash = await bcrypt.hash(student.matriculation, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Discipline, {
      through: 'students_disciplines',
      foreignKey: 'student',
      otherKey: 'discipline',
      as: 'student'
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Student;

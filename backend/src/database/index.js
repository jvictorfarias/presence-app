import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Discipline from '../app/models/Discipline';
import Teacher from '../app/models/Teacher';
import Student from '../app/models/Student';
import StudentDiscipline from '../app/models/StudentsDisciplines';

const models = [Discipline, Teacher, Student, StudentDiscipline];
class Database {
  constructor() {
    // this.mongo();
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // Start connection(init models)
    // Init connection on all models
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }
}

export default new Database();

import * as Yup from 'yup';
import Discipline from '../models/Discipline';
import Student from '../models/Student';
import Teacher from '../models/Teacher';

class DisciplineController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cod: Yup.string().required(),
      class_time: Yup.object().shape({
        days: Yup.date(),
        starts: Yup.date(),
        ends: Yup.date()
      })
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const { name, cod, class_time } = req.body;

    const students = await Student.find({});
    const teacher = await Teacher.findOne({ siape: 'arthur@ufc.br' });
    const discipline = await Discipline.create({
      name,
      cod,
      class_time,
      teacher: teacher._id,
      students
    });

    return res.status(200).json(discipline);
  }
}

export default new DisciplineController();

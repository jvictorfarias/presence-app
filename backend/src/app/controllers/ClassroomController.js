import * as Yup from 'yup';
// import Classroom from '../models/Classroom';
import Discipline from '../models/Discipline';
import Teacher from '../models/Teacher';
import Student from '../models/Student';

class ClassroomController {
  async show(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(403).json({ error: 'Data validation failed' });
    }
    const { type } = req.params;

    if (String(type) === 'student') {
      const [disciplines] = await Discipline.find({});

      const { name, cod } = disciplines;

      return res.status(200).json({
        name,
        cod
      });
    }

    if (String(type) === 'teacher') {
      const [disciplines] = await Discipline.find({});

      const { name, cod } = disciplines;

      return res.status(200).json({
        name,
        cod
      });
    }

    return res.status(400).json({ error: 'Not found' });
  }

  async index(req, res) {}
}

export default new ClassroomController();

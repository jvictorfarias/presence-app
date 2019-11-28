import * as Yup from 'yup';
import Discipline from '../models/Discipline';
import Teacher from '../models/Teacher';

class DisciplineController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cod: Yup.string().required(),
      class_time: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const { name, cod, class_time, teacher_id } = req.body;

    if (!(await Teacher.findByPk(teacher_id))) {
      return res.status(400).json({ error: 'teacher not found' });
    }

    const discipline = await Discipline.create({
      name,
      cod,
      class_time,
      teacher_id
    });

    return res.status(200).json(discipline);
  }

  async index(req, res) {
    const disciplines = await Discipline.find({});
    return res.status(400).json(disciplines);
  }
}

export default new DisciplineController();

import * as Yup from 'yup';
import Discipline from '../models/Discipline';

class DisciplineController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cod: Yup.string().required(),
      class_time: Yup.object().shape({
        days: Yup.date().array(),
        starts: Yup.date().required(),
        ends: Yup.date().required()
      })
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const { name, cod, class_time } = req.body;

    const discipline = await Discipline.create({ name, cod, class_time });

    return res.status(200).json(discipline);
  }
}

export default new DisciplineController();

import * as Yup from 'yup';
import Classroom from '../models/Classroom';

class ClassroomController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cod: Yup.string().required()
    });

    const { name, cod } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const classroom = await Classroom.create({ name, cod });

    return res.status(200).json(classroom);
  }
}

export default new ClassroomController();

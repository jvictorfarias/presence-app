import * as Yup from 'yup';
import bcrypt from 'bcrypt';
import Teacher from '../models/Teacher';

class TeacherController {
  async store(req, res) {
    /**
     * Validação do objeto Teacher
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      siape: Yup.string().required(),
      password: Yup.string()
        .min(8)
        .required()
    });

    /**
     * Caso seja inválido, retorna status de erro
     */

    const { name, siape, password } = req.body;
    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'Data not valid' });
    }

    /**
     * Verifica se já existe algum professor com essa matrícula
     */

    if (await Teacher.findOne({ where: { siape } })) {
      return res.status(401).json({ error: 'Teacher already exists' });
    }

    const { id } = await Teacher.create(req.body);
    return res.json({
      id,
      name,
      siape
    });
  }

  async show(req, res) {
    const teacher = await Teacher.findOne({ where: { siape: req.params.id } });

    if (!teacher) {
      return res.status(400).json({ error: 'teacher not found' });
    }

    const { id, name, siape } = teacher;
    return res.status(200).json({
      id,
      name,
      siape
    });
  }

  async index(req, res) {
    const teachers = await Teacher.findAll({});
    return res.json(teachers);
  }

  async delete(req, res) {
    const teacher = Teacher.findOne({ where: { siape: req.body.siape } });

    if (teacher) {
      const pass = teacher.checkPassword(req.body.password);
      if (!pass) {
        return res.status(401).json({ error: 'invalid password' });
      }
      teacher.destroy();
      teacher.save();
      return res.status(200).json({ ok: 'Professor deletado' });
    }

    return res.status(400).json({ error: 'teacher not found' });
  }
}

export default new TeacherController();

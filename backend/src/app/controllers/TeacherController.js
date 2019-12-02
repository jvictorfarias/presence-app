import Teacher from '../models/Teacher';

class TeacherController {
  async store(req, res) {
    const { name, siape } = req.body;

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
    const teacher = await Teacher.findOne({ where: { siape: req.body.siape } });

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

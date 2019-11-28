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
    /**
     * Verifica se o objeto para validação está correto
     */
    const schema = Yup.object().shape({
      siape: Yup.string().required(),
      password: Yup.string()
        .min(8)
        .required()
    });

    /**
     * Caso o objeto não seja válido, retorna status de erro
     */

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    /**
     * Busca pelo usuário já validado
     */
    const teacher = await Teacher.findOne({
      siape: req.body.siape
    });

    /**
     * Caso o usuário não seja encontrado, retorna erro
     */
    if (!teacher) {
      return res.status(400).json({ error: 'teacher not found' });
    }

    /**
     * Verifica se a senha do usuário está correta e encriptada
     */

    if (!(await bcrypt.compare(req.body.password, teacher.password_hash))) {
      return res.status(401).json({ error: 'Wrong password' });
    }
    /**
     * Retorna o usuário para que ele possa ser direcionado ao feed
     */
    const { id, name, siape } = teacher;
    return res.status(200).json({
      id,
      name,
      siape
    });
  }
}

export default new TeacherController();

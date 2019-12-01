import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    /**
     * Validação do objeto student
     */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      matriculation: Yup.string().required()
    });

    const { name, matriculation } = req.body;

    /**
     * Caso seja inválido, retorna status de erro
     */

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'Data not valid' });
    }

    /**
     * Verifica se já existe algum aluno com essa matrícula
     */

    if (await Student.findOne({ where: { matriculation } })) {
      return res.status(401).json({ error: 'student already exists' });
    }

    const { id } = await Student.create(req.body);
    return res.json({
      id,
      name,
      matriculation
    });
  }

  async show(req, res) {
    /**
     * Busca pelo usuário já validado
     */
    const student = await Student.findOne({
      where: {
        matriculation: req.params.id
      }
    });

    /**
     * Caso o usuário não seja encontrado, retorna erro
     */

    if (!student) {
      return res.status(400).json({ error: 'student not found' });
    }

    /**
     * Verifica se a senha do usuário está correta e encriptada
     */

    const { id, name, matriculation } = student;
    return res.status(200).json({
      id,
      name,
      matriculation
    });
  }

  async index(req, res) {
    const students = await Student.findAll({});
    return res.json(students);
  }

  async delete(req, res) {
    const student = await Student.destroy({
      where: { matriculation: req.params.id }
    });

    if (student >= 0) {
      return res.status(200).json({ ok: 'Estudante deletado' });
    }
    return res.status(400).json({ error: 'Student not found' });
  }
}

export default new StudentController();

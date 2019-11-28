import * as Yup from 'yup';
import bcrypt from 'bcrypt';
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
     * Verifica se o objeto para validação está correto
     */
    const schema = Yup.object().shape({
      matriculation: Yup.string().required(),
      password: Yup.string().required(),
      register: Yup.string()
    });

    /**
     * Caso o objeto não seja válido, retorna status de erro
     */

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const { password, matriculation, register } = req.body;

    /**
     * Busca pelo usuário já validado
     */
    const student = await Student.findOne({
      where: {
        matriculation
      }
    });

    if (student.register !== register && student.register !== null) {
      return res
        .status(403)
        .json({ error: 'Dispositivo já cadastrado anteriormente' });
    }

    /**
     * Caso o usuário não seja encontrado, retorna erro
     */
    if (!student) {
      return res.status(400).json({ error: 'student not found' });
    }

    /**
     * Verifica se a senha do usuário está correta e encriptada
     */

    if (!(await bcrypt.compare(password, student.password_hash))) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    const { id, name } = student;
    return res.status(200).json({
      id,
      name,
      matriculation
    });
  }

  async index(req, res) {
    const students = Student.find({});
    return res.json(students);
  }
}

export default new StudentController();

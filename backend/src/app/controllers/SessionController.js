import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import Teacher from '../models/Teacher';
import Student from '../models/Student';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required(),
      matriculation: Yup.string().when('type', {
        is: 'student',
        then: Yup.string().required()
      }),
      siape: Yup.string().when('type', {
        is: 'teacher',
        then: Yup.string().required()
      }),
      register: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const { matriculation, siape, type, register } = req.body;

    try {
      if (String(type) === 'student') {
        const student = await Student.findOne({ where: { matriculation } });

        if (register !== student.register && student.register !== null) {
          return res
            .status(402)
            .json({ error: 'Dispositivo já cadastrado anteriormente' });
        }

        await student.set({ register });
        await student.save();

        const { id, name } = student;

        return res.status(200).json({
          student: {
            id,
            name,
            matriculation,
            register
          },

          token: jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
          })
        });
      }
      if (String(type) === 'teacher') {
        const { id, name } = await Teacher.findOne({ where: { siape } });

        return res.status(200).json({
          teacher: {
            id,
            name,
            siape
          },

          token: jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
          })
        });
      }
    } catch (err) {
      console.log(err);
    }

    return res.status(400).json({ error: 'failed' });
  }
}

export default new SessionController();

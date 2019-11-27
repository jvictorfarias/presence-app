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
      })
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(403).json({ error: 'bad request' });
    }

    const { matriculation, siape, type } = req.body;

    try {
      if (String(type) === 'student') {
        const { _id, name } = await Student.findOne({ matriculation });

        return res.status(200).json({
          student: {
            _id,
            name,
            matriculation
          },

          token: jwt.sign({ _id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
          })
        });
      }
      if (String(type) === 'teacher') {
        const { _id, name } = await Teacher.findOne({ siape });

        return res.status(200).json({
          teacher: {
            _id,
            name,
            siape
          },

          token: jwt.sign({ _id }, authConfig.secret, {
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

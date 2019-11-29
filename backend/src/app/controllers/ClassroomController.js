import * as Yup from 'yup';
// import Classroom from '../models/Classroom';
import Discipline from '../models/Discipline';
import StudentDiscipline from '../models/StudentsDisciplines';
import Student from '../models/Student';

class ClassroomController {
  async store(req, res) {
    const { discipline_id, student_id } = req.body;
    const sdisc = await StudentDiscipline.create({ discipline_id, student_id });

    return res.status(200).json(sdisc);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(403).json({ error: 'Data validation failed' });
    }
    const { type } = req.params;

    if (String(type) === 'student') {
      const disciplines = await Discipline.findAll({
        attributes: ['id', 'name', 'class_time'],
        include: [
          {
            model: Student,
            attributes: [],
            where: { id: req.userId },
            through: {
              model: StudentDiscipline,
              key: 'student_id',
              as: 'student_disc',
              where: { present: false }
            }
          }
        ]
      });

      return res.status(200).json(disciplines);
    }

    if (String(type) === 'teacher') {
      const disciplines = await Discipline.findAll({
        attributes: ['id', 'name', 'class_time'],
        where: { teacher_id: req.userId }
      });

      return res.status(200).json(disciplines);
    }

    return res.status(400).json({ error: 'Not found' });
  }

  async index(req, res) {
    const studentsFromDiscipline = await StudentDiscipline.findAll({
      where: { discipline_id: req.headers.discipline_id },
      attributes: ['id', 'hit', 'miss', 'present'],
      include: [
        {
          model: Student,
          attributes: ['name', 'matriculation'],
          as: 'student_disc'
        }
      ]
    });

    return res.status(200).json(studentsFromDiscipline);
  }
}

export default new ClassroomController();

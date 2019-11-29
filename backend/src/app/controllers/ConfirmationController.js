import socket from 'socket.io';
import StudentDiscipline from '../models/StudentsDisciplines';

class ConfirmationController {
  async store(req, res) {
    const test = await StudentDiscipline.update(
      { present: true },
      {
        where: { student_id: req.userId },
        returning: true
      }
    );

    req.io.emit('present');
    console.log(test);
    return res.status(200).json({});
  }
}

export default new ConfirmationController();

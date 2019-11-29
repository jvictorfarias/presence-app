import socket from 'socket.io';
import StudentDiscipline from '../models/StudentsDisciplines';

class ConfirmationController {
  async store(req, res) {
    const relation = await StudentDiscipline.findOne({
      where: { student_id: req.userId }
    });

    relation.set({ present: true });
    relation.save();

    req.io.emit('present');
    return res.status(200).json({});
  }
}

export default new ConfirmationController();

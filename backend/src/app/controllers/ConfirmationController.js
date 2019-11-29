import StudentDiscipline from '../models/StudentsDisciplines';

class ConfirmationController {
  async store(req, res) {
    const relation = await StudentDiscipline.findOne({
      where: { student_id: req.userId }
    });

    relation.set({ present: true });
    relation.save();
    const { discipline_id } = relation;

    req.io.emit('present', discipline_id);
    return res.status(200).json({ ok: 'ok' });
  }
}

export default new ConfirmationController();

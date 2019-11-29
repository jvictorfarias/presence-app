import StudentDiscipline from '../models/StudentsDisciplines';

class ConfirmationController {
  async store(req, res) {
    const relation = await StudentDiscipline.findOne({
      where: { student_id: req.userId }
    });

    let newHit = relation.hit;
    newHit += 1;
    relation.set({ present: true });
    relation.set({ hit: newHit });
    relation.save();
    const { discipline_id, student_id } = relation;

    req.io.emit('present', discipline_id);
    req.io.emit('confirmation', student_id);
    return res.status(200).json({ ok: 'ok' });
  }
}

export default new ConfirmationController();

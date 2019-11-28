import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import TeacherController from './app/controllers/TeacherController';
import DisciplineController from './app/controllers/DisciplineController';
import ClassroomController from './app/controllers/ClassroomController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/** Criação de sessão para usuário */

routes.post('/session', SessionController.store);

/** Rotas para alunos */
routes.post('/students', StudentController.store);
routes.get('/students', StudentController.show);
routes.get('/students/show', StudentController.index);

/** Rotas para professores */

routes.post('/teachers', TeacherController.store);

/** Rotas para disciplinas */

routes.post('/disciplines', DisciplineController.store);
routes.get('/disciplines', DisciplineController.index);

/** Rotas para salas de aulas */
routes.get('/classroom/:type/', authMiddleware, ClassroomController.show);

export default routes;

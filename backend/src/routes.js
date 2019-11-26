import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import TeacherController from './app/controllers/TeacherController';
import DisciplineController from './app/controllers/DisciplineController';

const routes = new Router();
/**
 * Rotas para alunos
 */
routes.post('/students', StudentController.store);
routes.get('/students/:id', StudentController.show);
routes.get('/students', StudentController.index);

/**
 * Rotas para professores
 */

routes.post('/teachers', TeacherController.store);
routes.get('/teachers/:id', TeacherController.show);

/**
 * Rotas para disciplinas
 */

routes.post('/disciplines', DisciplineController.store);
routes.get('/disciplines/:id', DisciplineController.show);

export default routes;

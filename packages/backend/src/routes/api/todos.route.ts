import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import {
	todosPatchValidation,
	todosValidation,
} from '@/validations/todoValidate';
import { isExist, tryCatch, validateRequest } from '@/middlewares/common';
import { MODELS } from '@/types/models.enum';

const todosRouter: Router = Router();

todosRouter.get(
	'/all',
	tryCatch(todoController.getAllTodo.bind(todoController)),
);
todosRouter.post(
	'/create',
	validateRequest(todosValidation),
	tryCatch(todoController.createTodo.bind(todoController)),
);
todosRouter.delete(
	'/delete/:id',
	isExist(MODELS.TODOS),
	tryCatch(todoController.deleteTodo.bind(todoController)),
);
todosRouter.patch(
	'/update/:id',
	validateRequest(todosPatchValidation),
	isExist(MODELS.TODOS),
	tryCatch(todoController.updateTodo.bind(todoController)),
);

export default todosRouter;

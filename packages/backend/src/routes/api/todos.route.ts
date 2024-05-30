import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import {
	todosPatchValidation,
	todosValidation,
} from '@/validations/todoValidate';
import {
	authenticateJwt,
	isExist,
	optionalAuthenticateJwt,
	tryCatch,
	validateRequest,
} from '@/middlewares/common';
import { MODELS } from '@/types/models.enum';

const todosRouter: Router = Router();

todosRouter.get(
	'/all',
	optionalAuthenticateJwt,
	tryCatch(todoController.getAllTodo.bind(todoController)),
);
todosRouter.post(
	'/create',
	authenticateJwt,
	validateRequest(todosValidation),
	tryCatch(todoController.createTodo.bind(todoController)),
);
todosRouter.delete(
	'/delete/:id',
	authenticateJwt,
	isExist(MODELS.TODOS),
	tryCatch(todoController.deleteTodo.bind(todoController)),
);
todosRouter.patch(
	'/update/:id',
	authenticateJwt,
	validateRequest(todosPatchValidation),
	isExist(MODELS.TODOS),
	tryCatch(todoController.updateTodo.bind(todoController)),
);

todosRouter.get(
	'/:id',
	authenticateJwt,
	isExist(MODELS.TODOS),
	tryCatch(todoController.getTodo.bind(todoController)),
);

export default todosRouter;

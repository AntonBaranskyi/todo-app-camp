import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoType } from '@/types/todos.type';
import { STATUS } from '@/types/status.enum';
import { SORT } from '@/types/sortOder.enum';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(req: Request, res: Response): Promise<void> {
		const userId = req?.body?.user?.id ?? null;
		const search = (req.query.search as string) || '';
		const status = (req.query.status as STATUS) || STATUS.ALL;
		const sortOrder = (req.query.sortOrder as SORT) || SORT.ASC;
		const limit = +(req.query.limit as string) || 4;
		const page = +(req.query.page as string) || 1;

		const { todos, totalItems } = await this.todoService.findAll({
			userId,
			search,
			status,
			sortOrder,
			limit: Number(limit),
			page: Number(page),
		});
		res.send({ todos, totalItems });
	}

	async createTodo(req: Request, resp: Response): Promise<void> {
		const { title, completed, description, isPrivate, userId } = req.body;

		const todo = await this.todoService.createOne({
			title,
			completed,
			description,
			isPrivate,
			userId,
		});

		resp.status(201).send(todo);
	}

	async deleteTodo(req: Request, resp: Response): Promise<void> {
		const { id } = req.params;

		const deleted = await this.todoService.deleteOne(Number(id));

		resp.status(200).json({ message: deleted });
	}

	async updateTodo(req: Request, resp: Response): Promise<void> {
		const { id } = req.params;

		const updatedTodo = await this.todoService.updateOne(
			Number(id),
			req.body as TodoType,
		);

		resp.status(200).json(updatedTodo);
	}

	async getTodo(req: Request, resp: Response): Promise<void> {
		const { id } = req.params;

		const todo = await this.todoService.findOne(+id);

		resp.status(200).send(todo);
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;

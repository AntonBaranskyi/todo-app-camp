import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';
import { TodoType } from '@/types/todos.type';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		const todos = await this.todoService.findAll();
		res.send(todos);
	}

	async createTodo(req: Request, resp: Response): Promise<void> {
		const { title, completed } = req.body;

		const todo = await this.todoService.createOne({ title, completed });

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
}

const todoController = new TodoController(new TodoService());
export default todoController;

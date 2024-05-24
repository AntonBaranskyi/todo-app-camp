import { AxiosResponse } from 'axios';
import HttpSerivce from '~shared/services/http.service';
import { ITodo } from '~store/todo-store/todo.store.types';

class TodoService extends HttpSerivce {
	constructor() {
		super();
	}

	getTodos(): Promise<AxiosResponse<ITodo[]>> {
		const data = this.get({
			url: 'todos/all',
		});

		return data;
	}

	deleteTodo(id: number): Promise<AxiosResponse<object>> {
		const data = this.delete({
			url: `todos/delete/${id}`,
		});

		return data;
	}

	updateTodo({
		id,
		data,
	}: {
		id: number;
		data: Partial<ITodo>;
	}): Promise<AxiosResponse<ITodo>> {
		const response = this.patch({
			url: `todos/update/${id}`,
			data,
		});

		return response;
	}

	createTodo(data: ITodo): Promise<AxiosResponse<ITodo>> {
		const response = this.post({
			url: 'todos/create',
			data,
		});

		return response;
	}
}

const todoService = new TodoService();

export default todoService;

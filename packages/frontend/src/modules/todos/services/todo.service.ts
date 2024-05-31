import { AxiosResponse } from 'axios';
import HttpSerivce from '~shared/services/http.service';
import { ITodo } from '~store/todo-store/todo.store.types';
import { IFilterParams } from '../types/todo-filter.types';

class TodoService extends HttpSerivce {
	constructor() {
		super();
	}

	getTodos({
		sort,
		search,
		status,
		page,
	}: IFilterParams): Promise<
		AxiosResponse<{ todos: ITodo[]; totalItems: number }>
	> {
		const params = {};

		if (sort) params.sort = sort;
		if (search) params.search = search;
		if (status) params.status = status;
		if (page) params.page = page;

		const data = this.get({
			url: 'todos/all',
			params,
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

	findTodo(id: number): Promise<AxiosResponse<ITodo>> {
		const response = this.get({ url: `todos/${id}` });

		return response;
	}
}

const todoService = new TodoService();

export default todoService;

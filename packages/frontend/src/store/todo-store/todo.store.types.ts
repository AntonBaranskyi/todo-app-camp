import { IFilterParams } from '~modules/todos/types/todo-filter.types';
import { PAGINATION } from '~modules/todos/types/todo-pagination.enum';

export interface ITodo {
	id: number;
	title: string;
	description: string;
	completed: boolean;

	isPrivate: boolean;
	userId?: number | null;
}

export interface ITodosState {
	todos: ITodo[];
	isLoading: boolean;
	addTodoLoading: boolean;
	getAllTodo: ({
		search,
		sort,
		status,
		page,
	}: IFilterParams) => Promise<void>;
	deleteOneTodo: (id: number) => void;
	updateOneTodo: ({ id, data }: { id: number; data: Partial<ITodo> }) => void;
	createOneTodo: (data: ITodo) => Promise<void>;
	editingTodo: ITodo;
	currentTodo: ITodo | null;
	currentTodoLoading: boolean;
	totalTodos: number;

	paginationType: PAGINATION;

	onChangePaginationType: (type: PAGINATION) => void;

	setEditingTodo: (todo: ITodo) => void;
	clearEditingTodo: () => void;
	findOneTodo: (id: number) => void;
}

export interface ITodo {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}

export interface ITodosState {
	todos: ITodo[];
	isLoading: boolean;
	addTodoLoading: boolean;
	getAllTodo: () => Promise<void>;
	deleteOneTodo: (id: number) => void;
	updateOneTodo: ({ id, data }: { id: number; data: Partial<ITodo> }) => void;
	createOneTodo: (data: ITodo) => Promise<void>;
	editingTodo: ITodo;

	setEditingTodo: (todo: ITodo) => void;
}

import { create } from 'zustand';
import { ITodo, ITodosState } from './todo.store.types';
import todoService from '~modules/todos/services/todo.service';

export const useTodoStore = create<ITodosState>((set) => ({
	todos: [],
	isLoading: false,
	addTodoLoading: false,
	editingTodo: null,
	currentTodo: null,

	currentTodoLoading: false,

	getAllTodo: async ({ search, sort, status }): Promise<void> => {
		const todos = await todoService.getTodos({ search, sort, status });
		set({ todos: todos.data });
	},

	deleteOneTodo: async (id: number): Promise<void> => {
		await todoService.deleteTodo(id);

		set((state) => ({
			todos: state.todos.filter((todo) => todo.id !== id),
		}));
	},

	updateOneTodo: async ({ id, data }): Promise<void> => {
		const updatedTodo = await todoService.updateTodo({ id, data });

		set((state) => ({
			todos: state.todos.map((todo) =>
				todo.id === id ? { ...todo, ...updatedTodo.data } : todo,
			),
		}));
	},

	createOneTodo: async (data: ITodo): Promise<void> => {
		set({ addTodoLoading: true });
		const addedTodo = await todoService.createTodo(data);

		set((state) => ({
			todos: [...state.todos, addedTodo.data],
		}));

		set({ addTodoLoading: false });
	},

	findOneTodo: async (id): Promise<void> => {
		set({ currentTodoLoading: true });
		const oneTodo = await todoService.findTodo(id);

		set({ currentTodo: oneTodo.data });

		set({ currentTodoLoading: false });
	},

	setEditingTodo: (todo: ITodo): void => {
		set({ editingTodo: todo });
	},

	clearEditingTodo: (): void => {
		set({ editingTodo: null });
	},
}));

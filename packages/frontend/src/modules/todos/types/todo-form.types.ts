import { ITodo } from '~store/todo-store/todo.store.types';

export type TodoName = 'title' | 'description' | 'completed' | 'isPrivate';

export type PublicTodo = Omit<ITodo, 'userId'>;

import { useNavigate } from 'react-router-dom';
import { useCommonStore } from '~store/common-store/common.store';
import { useTodoStore } from '~store/todo-store/todo.store';
import { ITodo } from '~store/todo-store/todo.store.types';

type TodoActions = {
	handleDeleteTodo: (id: number) => void;
	handleChangeStatus: (todo: ITodo) => void;
	handleEditOpen: (todo: ITodo) => void;
	handleNavigate: (id: number) => void;
};

export const useTodoActions = (): TodoActions => {
	const navigate = useNavigate();

	const { deleteOneTodo, updateOneTodo, setEditingTodo } = useTodoStore(
		(state) => state,
	);

	const { toggleModalOpen, toggleEdditing } = useCommonStore(
		(state) => state,
	);

	const handleDeleteTodo = (id: number): void => {
		deleteOneTodo(id);
	};

	const handleChangeStatus = (todo: ITodo): void => {
		updateOneTodo({ id: todo.id, data: { completed: !todo.completed } });
	};

	const handleEditOpen = (todo: ITodo): void => {
		toggleEdditing(true);
		toggleModalOpen(true);

		setEditingTodo(todo);
	};

	const handleNavigate = (id: number): void => {
		navigate(`todo/${id}`);
	};

	return {
		handleDeleteTodo,
		handleChangeStatus,
		handleEditOpen,
		handleNavigate,
	};
};

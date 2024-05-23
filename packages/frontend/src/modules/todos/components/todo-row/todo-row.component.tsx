import React from 'react';
import { ITodo } from '~store/todo-store/todo.store.types';
import {
	actionsWrapper,
	actionWrapper,
	switchStyle,
	titleWrapper,
} from './todo-row.styles';
import { Button, Switch } from '@blueprintjs/core';
import { useTodoStore } from '~store/todo-store/todo.store';
import { useCommonStore } from '~store/common-store/common.store';

type Props = {
	todo: ITodo;
};

export const TodoRaw: React.FC<Props> = ({ todo }): React.ReactNode => {
	const { deleteOneTodo, updateOneTodo, setEditingTodo } = useTodoStore(
		(state) => state,
	);
	const { toggleModalOpen, toggleEdditing } = useCommonStore(
		(state) => state,
	);

	const handleDeleteTodo = (): void => {
		deleteOneTodo(todo.id);
	};

	const handleChangeStatus = (): void => {
		updateOneTodo({ id: todo.id, data: { completed: !todo.completed } });
	};

	const handleEditOpen = (): void => {
		toggleEdditing(true);
		toggleModalOpen();

		setEditingTodo(todo);
	};

	return (
		<tr>
			<td className={titleWrapper}>{todo.title}</td>
			<td>{todo.description}</td>
			<td className={actionWrapper}>
				<div className={actionsWrapper}>
					<Button text="View" />
					<Button text="Edit" onClick={handleEditOpen} />
					<Button text="Delete" onClick={handleDeleteTodo} />
					<Switch
						className={switchStyle}
						checked={todo.completed}
						onChange={handleChangeStatus}
					/>
				</div>
			</td>
		</tr>
	);
};

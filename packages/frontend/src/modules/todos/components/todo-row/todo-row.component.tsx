import React from 'react';
import { ITodo } from '~store/todo-store/todo.store.types';
import {
	actionsWrapper,
	actionWrapper,
	switchStyle,
	titleWrapper,
} from './todo-row.styles';
import { Button, Switch } from '@blueprintjs/core';
import { useTodoActions } from '~modules/todos/hooks/useTodoActions';

type Props = {
	todo: ITodo;
};

export const TodoRaw: React.FC<Props> = ({ todo }): React.ReactNode => {
	const {
		handleDeleteTodo,
		handleEditOpen,
		handleChangeStatus,
		handleNavigate,
	} = useTodoActions();

	const onHandleDeleteTodo = (): void => {
		handleDeleteTodo(todo.id);
	};
	const onHandleEditOpen = (): void => {
		handleEditOpen(todo);
	};

	const onHandleChangeStatus = (): void => {
		handleChangeStatus(todo);
	};

	const onHandleNavigate = (): void => {
		handleNavigate(todo.id);
	};

	return (
		<tr>
			<td className={titleWrapper}>{todo.title}</td>
			<td>{todo.description}</td>
			<td className={actionWrapper}>
				<div className={actionsWrapper}>
					<Button text="View" onClick={onHandleNavigate} />
					<Button text="Edit" onClick={onHandleEditOpen} />
					<Button text="Delete" onClick={onHandleDeleteTodo} />
					<Switch
						className={switchStyle}
						checked={todo.completed}
						onChange={onHandleChangeStatus}
					/>
				</div>
			</td>
		</tr>
	);
};

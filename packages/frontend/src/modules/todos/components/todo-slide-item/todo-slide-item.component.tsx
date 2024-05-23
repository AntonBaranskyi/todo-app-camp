import React from 'react';
import {
	bottomWrapper,
	buttonsWrapper,
	sliderItem,
	switchStyle,
	todoTitle,
} from './todo-slide-item.style';
import { ITodo } from '~store/todo-store/todo.store.types';
import { Button, Switch } from '@blueprintjs/core';
import { useTodoActions } from '~modules/todos/hooks/useTodoActions';

type Props = {
	todo: ITodo;
};

export const TodoSlideItem: React.FC<Props> = ({ todo }): React.ReactNode => {
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
		<div className={sliderItem}>
			<div>
				<h2 className={todoTitle}>{todo.title}</h2>

				<p>{todo.description}</p>
			</div>
			<div>
				<div className={bottomWrapper}>
					<div className={buttonsWrapper}>
						<Button text="View" onClick={onHandleNavigate} />
						<Button text="Edit" onClick={onHandleEditOpen} />
						<Button text="Delete" onClick={onHandleDeleteTodo} />
					</div>
					<Switch
						className={switchStyle}
						checked={todo.completed}
						onChange={onHandleChangeStatus}
					/>
				</div>
			</div>
		</div>
	);
};

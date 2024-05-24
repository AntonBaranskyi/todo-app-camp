import React from 'react';
import { ITodo } from '~store/todo-store/todo.store.types';
import { todoListStyles } from './todo-list.styles';
import { TodoSlideItem } from '../todo-slide-item';

type Props = {
	todos: ITodo[];
};

export const TodoList: React.FC<Props> = ({ todos }): React.ReactNode => {
	return (
		<div className={todoListStyles}>
			{todos.map((todo) => (
				<TodoSlideItem key={todo.id} todo={todo} />
			))}
		</div>
	);
};

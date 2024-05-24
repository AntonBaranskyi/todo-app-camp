import { HTMLTable } from '@blueprintjs/core';
import React from 'react';
import { tableStyle } from './todo-table.styles';
import { ITodo } from '~store/todo-store/todo.store.types';
import { TodoRaw } from '../todo-row';

type Props = {
	todos: ITodo[];
};

export const TodoTable: React.FC<Props> = ({ todos }): React.ReactNode => {
	return (
		<HTMLTable className={tableStyle} bordered compact striped>
			<thead>
				<tr>
					<th>Todo Title</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				{todos &&
					todos.map((todo) => <TodoRaw todo={todo} key={todo.id} />)}
			</tbody>
		</HTMLTable>
	);
};

import React from 'react';
import { ITodo } from '~store/todo-store/todo.store.types';
import { todoListEndTitle, todoListStyles } from './todo-list.styles';
import { TodoSlideItem } from '../todo-slide-item';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTodoStore } from '~store/todo-store/todo.store';
import { useFilterTodods } from '~modules/todos/hooks/useFilterTodods';
import { PulseLoader } from 'react-spinners';

type Props = {
	todos: ITodo[];
};

export const TodoList: React.FC<Props> = ({ todos }): React.ReactNode => {
	const totalTodos = useTodoStore((state) => state.totalTodos);

	const totalPage = Math.ceil(totalTodos / 4);

	const { onHandleSliderReachEnd, page } = useFilterTodods();

	return (
		<div className={todoListStyles}>
			<InfiniteScroll
				dataLength={totalTodos}
				next={onHandleSliderReachEnd}
				scrollableTarget="scrollableDiv"
				hasMore={totalPage > page}
				loader={<PulseLoader />}
				endMessage={<h1 className={todoListEndTitle}>End of todos</h1>}
			>
				{todos.map((todo) => (
					<TodoSlideItem key={todo.id} todo={todo} />
				))}
			</InfiniteScroll>
		</div>
	);
};

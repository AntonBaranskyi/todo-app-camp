import React from 'react';
import ReactPaginate from 'react-paginate';
import { useFilterTodods } from '~modules/todos/hooks/useFilterTodods';
import { useTodoStore } from '~store/todo-store/todo.store';
import {
	pagination,
	paginationWrapper,
} from './todo-desktop-pagination.styles';

export const TodoPagination = (): React.ReactNode => {
	const { totalTodos } = useTodoStore((state) => state);

	const { handlePaginateChange } = useFilterTodods();

	return (
		<div className={paginationWrapper}>
			<ReactPaginate
				breakLabel="..."
				pageCount={Math.ceil(totalTodos / 4)}
				renderOnZeroPageCount={null}
				onPageChange={handlePaginateChange}
				className={pagination}
				previousLabel={<p>{'<'}</p>}
				nextLabel={<p>{'>'}</p>}
			/>
		</div>
	);
};

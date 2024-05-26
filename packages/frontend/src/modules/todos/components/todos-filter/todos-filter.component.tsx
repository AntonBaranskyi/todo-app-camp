import React from 'react';
import { todoFilterBtn, todosFilterWrapper } from './todos-filter.styles';
import { FILTERS } from '~modules/todos/constants/filter.constants';

export const TodosFilter = (): React.ReactNode => {
	return (
		<div className={todosFilterWrapper}>
			{FILTERS.map((filter) => (
				<button className={todoFilterBtn} key={filter}>
					{filter}
				</button>
			))}
		</div>
	);
};

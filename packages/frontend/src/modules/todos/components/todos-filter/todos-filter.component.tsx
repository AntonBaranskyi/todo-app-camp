import React from 'react';
import {
	activeFilterBtn,
	todoFilterBtn,
	todosFilterWrapper,
} from './todos-filter.styles';
import { FILTERS } from '~modules/todos/constants/filter.constants';
import { SearchLink } from '~shared/components/search-link';
import { useFilterTodods } from '~modules/todos/hooks/useFilterTodods';
import classNames from 'classnames';

export const TodosFilter = (): React.ReactNode => {
	const { status } = useFilterTodods();

	return (
		<div className={todosFilterWrapper}>
			{FILTERS.map((filter) => (
				<SearchLink
					className={classNames(todoFilterBtn, {
						[activeFilterBtn]: filter.status === status,
					})}
					key={filter.status}
					params={{ status: filter.status }}
				>
					{filter.title}
				</SearchLink>
			))}
		</div>
	);
};

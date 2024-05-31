import { useSearchParams } from 'react-router-dom';
import { SORT, STATUS } from '../types/todo-filter.types';
import { getSearchWith } from '~shared/utils/searchHelper';
import { useTodoStore } from '~store/todo-store/todo.store';
import { ISearchParams } from '../types/todo-search-params.types';

interface IHook {
	search: string;
	status: STATUS;
	sort: SORT;
	page: number;
	limit: number;
	setSearchWith: (params: ISearchParams) => void;
	handlePaginateChange: (selected: { selected: number }) => void;
	onHandleSliderReachEnd: () => void;
}

export const useFilterTodods = (): IHook => {
	const [searchParams, setSearchParams] = useSearchParams();
	const totalTodos = useTodoStore((state) => state.totalTodos);

	const search = searchParams.get('search') || '';
	const status = searchParams.get('status') as STATUS;
	const sort = searchParams.get('sort') as SORT;
	const limit = (searchParams.get('limit') as string) || '4';
	const page = (searchParams.get('page') as string) || '1';

	const setSearchWith = (params: ISearchParams): void => {
		const search = getSearchWith(searchParams, params);
		setSearchParams(search);
	};

	const handlePaginateChange = (event: { selected: number }): void => {
		console.log(event.selected);

		setSearchWith({ page: event.selected + 1 });
	};

	const onHandleSliderReachEnd = (): void => {
		const totalPages = totalTodos / 4;

		if (+page < totalPages) {
			setSearchWith({ page: +page + 1 });
		}
	};

	return {
		search,
		status,
		sort,
		setSearchWith,
		page: +page,
		limit: +limit,
		handlePaginateChange,
		onHandleSliderReachEnd,
	};
};

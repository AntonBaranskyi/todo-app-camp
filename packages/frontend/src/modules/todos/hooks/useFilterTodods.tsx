import { useSearchParams } from 'react-router-dom';
import { SORT, STATUS } from '../types/todo-filter.types';
import { getSearchWith } from '~shared/utils/searchHelper';

interface IHook {
	search: string;
	status: STATUS;
	sort: SORT;
	setSearchWith: (params: any) => void;
}

export const useFilterTodods = (): IHook => {
	const [searchParams, setSearchParams] = useSearchParams();

	const search = searchParams.get('search') || '';
	const status = searchParams.get('status') as STATUS;
	const sort = searchParams.get('sort') as SORT;

	const setSearchWith = (params: any): void => {
		const search = getSearchWith(searchParams, params);

		setSearchParams(search);
	};

	return {
		search,
		status,
		sort,
		setSearchWith,
	};
};

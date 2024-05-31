import { SORT, STATUS } from './todo-filter.types';

export interface ISearchParams {
	search?: string | null;
	status?: STATUS;
	sort?: SORT;
	page?: number;
}

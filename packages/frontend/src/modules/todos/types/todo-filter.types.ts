export enum STATUS {
	COMPLETED = 'completed',
	PRIVATE = 'private',
	PUBLIC = 'public',
	ALL = 'all',
}

export enum SORT {
	ASC = 'asc',
	DESC = 'desc',
}

export interface IFilterParams {
	sort: SORT;
	search: string;
	status: STATUS;
	page: number;
}

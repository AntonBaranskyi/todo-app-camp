import { SORT } from './sortOder.enum';
import { STATUS } from './status.enum';

export interface IFindAll {
	userId: number | null;
	search: string;
	status: STATUS;
	sortOrder: SORT;
	limit: number;
	page: number;
}

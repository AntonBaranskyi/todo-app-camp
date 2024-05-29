import { SORT } from '@/types/sortOder.enum';
import { STATUS } from '@/types/status.enum';
import { QueryMode } from '@prisma/client';

export const buildSearchConditions = ({
	userId,
	search,
	status,
	sortOrder,
}: {
	userId: number | null;
	search: string | undefined;
	status: STATUS | undefined;
	sortOrder: SORT;
}) => {
	const conditions = [
		{ isPrivate: false },
		...(userId ? [{ userId: userId }] : []),
		...(search
			? [{ title: { contains: search, mode: QueryMode.insensitive } }]
			: []),
	];

	if (status === STATUS.COMPLETED) {
		conditions.push({ completed: true });
	} else if (status === STATUS.PRIVATE) {
		conditions.push({ isPrivate: true });
	} else if (status === STATUS.PUBLIC) {
		conditions.push({ isPrivate: false });
	}

	return { where: { AND: conditions }, orderBy: { title: sortOrder } };
};

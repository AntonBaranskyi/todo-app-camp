import { STATUS } from '@/types/status.enum';

export const buildSearchConditions = ({
	userId,
	search,
	status,
}: {
	userId: number | null;
	search: string | undefined;
	status: STATUS | undefined;
}) => {
	const searchFilter = search ? { contains: search } : null;
	const baseConditions = [
		{
			isPrivate: false,
			title: searchFilter,
		},
	];

	if (userId) {
		baseConditions.push({
			userId,
			isPrivate: true,
			title: searchFilter,
		});
	}

	const statusConditions: Record<string, object> = {
		[STATUS.COMPLETED]: baseConditions.map((condition) => ({
			...condition,
			completed: true,
		})),
		[STATUS.PRIVATE]:
			userId !== null
				? [
						{
							userId,
							isPrivate: true,
							title: searchFilter,
						},
					]
				: [],
		[STATUS.PUBLIC]: [
			{
				isPrivate: false,
				title: searchFilter,
			},
		],
		[STATUS.ALL]: baseConditions,
	};

	return {
		OR: status ? statusConditions[status] : baseConditions,
	};
};

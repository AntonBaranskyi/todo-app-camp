import React from 'react';
import { Link, LinkProps, useSearchParams } from 'react-router-dom';
import { getSearchWith, SearchParams } from '~shared/utils/searchHelper';

type Props = Omit<LinkProps, 'to'> & {
	params: SearchParams;
};

export const SearchLink: React.FC<Props> = ({
	children,
	params,
	...props
}): React.ReactNode => {
	const [searchParams] = useSearchParams();

	return (
		<Link
			style={{ textDecoration: 'none', color: 'inherit' }}
			to={{
				search: getSearchWith(searchParams, params),
			}}
			{...props}
		>
			{children}
		</Link>
	);
};

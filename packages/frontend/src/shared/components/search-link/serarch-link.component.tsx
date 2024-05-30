import React from 'react';
import { Link, LinkProps, useSearchParams } from 'react-router-dom';
import { getSearchWith, SearchParams } from '~shared/utils/searchHelper';
import { linkStyles } from './search-link.styles';

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
			className={linkStyles}
			to={{
				search: getSearchWith(searchParams, params),
			}}
			{...props}
		>
			{children}
		</Link>
	);
};

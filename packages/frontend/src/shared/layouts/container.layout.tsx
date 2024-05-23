import React from 'react';

import { layoutContainer } from './container.layout.styles';

type Props = {
	children: React.ReactNode;
};

export const GlobalContainer: React.FC<Props> = ({ children }) => {
	return <div className={layoutContainer}>{children}</div>;
};

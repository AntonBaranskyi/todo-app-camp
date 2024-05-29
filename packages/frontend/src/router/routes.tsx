import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

export const PublicRoute = ({ element, ...rest }) => {
	return <Route {...rest} element={element} />;
};

export const PrivateRoute = ({
	isAuthenticated,
	children,
}): React.ReactNode => {
	return isAuthenticated ? (
		children
	) : (
		<Navigate to={`/${ROUTER_KEYS.AUTH}/${ROUTER_KEYS.LOGIN}`} />
	);
};

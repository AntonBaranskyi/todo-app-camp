import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useAuthStore } from '~store/auth-store/auth.store';
import { ClipLoader } from 'react-spinners';

export const PrivateRoute = ({ children }): React.ReactNode => {
	const { isAuth, userLoading } = useAuthStore((state) => state);
	const navigate = useNavigate();

	if (userLoading) {
		return <ClipLoader size={100} />;
	}

	if (!isAuth) {
		navigate(ROUTER_KEYS.ALL_MATCH);
		return null;
	}

	return children;
};

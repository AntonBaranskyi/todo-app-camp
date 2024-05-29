import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthStore } from '~store/auth-store/auth.store';

export const VerificateUser = (): React.ReactNode => {
	const { token } = useParams();
	const verifyUser = useAuthStore((state) => state.verifyUser);

	const navigate = useNavigate();

	useEffect(() => {
		verifyUser(token);
		navigate('/');
	}, []);

	return <div></div>;
};

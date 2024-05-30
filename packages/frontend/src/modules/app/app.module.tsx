import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthStore } from '~store/auth-store/auth.store';

const App = (): React.ReactNode => {
	const { checkUser } = useAuthStore((state) => state);

	React.useEffect(() => {
		checkUser();
	}, []);

	return <Outlet />;
};

export default App;

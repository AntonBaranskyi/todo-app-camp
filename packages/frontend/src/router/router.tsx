import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '~modules/app/app.module';
import { LoginForm } from '~modules/auth/components/loginForm';
import { AuthPage } from '~modules/auth/layouts/auth.page';
import { TodoDetailPage } from '~modules/todos/layouts/todo-detail';
import { TodoHomePage } from '~modules/todos/layouts/todo-home';
import { ROUTER_KEYS } from '~shared/keys';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTER_KEYS.ALL_MATCH} element={<App />}>
					<Route index element={<TodoHomePage />} />
					<Route
						path={ROUTER_KEYS.TODO_DETAILS}
						element={<TodoDetailPage />}
					/>

					<Route path={ROUTER_KEYS.AUTH} element={<AuthPage />}>
						<Route
							path={ROUTER_KEYS.LOGIN}
							element={<LoginForm />}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

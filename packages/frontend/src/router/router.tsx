import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '~modules/app/app.module';
import { AuthForm } from '~modules/auth/components/authForm';
import { ForgotPassword } from '~modules/auth/components/forgot-password/forgot-password.component';
import { ResetPassword } from '~modules/auth/components/reset-password';
import { AuthPage } from '~modules/auth/layouts/auth.page';
import { TodoDetailPage } from '~modules/todos/layouts/todo-detail';
import { TodoHomePage } from '~modules/todos/layouts/todo-home';
import { ROUTER_KEYS } from '~shared/keys';
import { AUTH_TYPE } from '~shared/types/authEnum';
import { PrivateRoute } from './routes'; // Ensure correct import path
import { VerificateUser } from '~modules/auth/components/verificate-user';

const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTER_KEYS.ALL_MATCH} element={<App />}>
					<Route index element={<TodoHomePage />} />
					<Route
						path={ROUTER_KEYS.TODO_DETAILS}
						element={
							<PrivateRoute>
								<TodoDetailPage />
							</PrivateRoute>
						}
					/>

					<Route path={ROUTER_KEYS.AUTH} element={<AuthPage />}>
						<Route
							path={ROUTER_KEYS.LOGIN}
							element={<AuthForm type={AUTH_TYPE.LOGIN} />}
						/>
						<Route
							path={ROUTER_KEYS.REGISTER}
							element={<AuthForm type={AUTH_TYPE.REGISTARTION} />}
						/>
						<Route
							path={ROUTER_KEYS.FORGOT}
							element={<ForgotPassword />}
						/>
						<Route
							path={`${ROUTER_KEYS.RESET}/:userToken`}
							element={<ResetPassword />}
						/>

						<Route
							path={`${ROUTER_KEYS.VERIFICATE}/:token`}
							element={<VerificateUser />}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

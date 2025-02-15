import React from 'react';
import {
	authTitle,
	forgotWrapper,
	submitButton,
	wrapperDont,
} from './authForm.styles';
import { InputAuth } from '../InputAuth';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import { AUTH_TYPE } from '~shared/types/authEnum';
import { useForm } from 'react-hook-form';
import { IUserLogin } from '~store/auth-store/auth.store.types';
import { useAuthStore } from '~store/auth-store/auth.store';
import { useCommonStore } from '~store/common-store/common.store';
import { DEFAULT_VALUES } from '~modules/auth/constants/defaultValues';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
	type: AUTH_TYPE;
};

export const AuthForm: React.FC<Props> = ({ type }): React.ReactNode => {
	const { signUpOneUser, loginOneUser, isAuth } = useAuthStore(
		(state) => state,
	);

	const toggleVerificateUser = useCommonStore(
		(state) => state.toggleVerificateUser,
	);
	const isLogin = AUTH_TYPE.LOGIN === type;

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: DEFAULT_VALUES.REGISTER_LOGIN,
		mode: 'onBlur',
	});

	const onHandleSubmit = (data: IUserLogin): void => {
		if (isLogin) {
			loginOneUser(data);

			return;
		}
		signUpOneUser(data);
		toggleVerificateUser(true);
	};

	if (isAuth) {
		return <Navigate to={ROUTER_KEYS.ALL_MATCH} />;
	}

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<h1 className={authTitle}>{isLogin ? 'Login' : 'Registration'}</h1>

			<InputAuth
				label="Email"
				placeholder="Write your email"
				name="email"
				register={register}
				errors={errors}
			/>
			<InputAuth
				label="Password"
				placeholder="Write your password"
				name="password"
				register={register}
				errors={errors}
			/>

			{isLogin && (
				<div className={forgotWrapper}>
					<Link to={`/${ROUTER_KEYS.AUTH}/${ROUTER_KEYS.FORGOT}`}>
						Forgot password?
					</Link>
				</div>
			)}

			<Button
				large
				text={isLogin ? 'Login' : 'Registrate'}
				className={submitButton}
				type="submit"
				disabled={!isValid}
			/>

			<div className={wrapperDont}>
				{isLogin ? (
					<>
						<p>Don't have account? </p>
						<Link
							to={`/${ROUTER_KEYS.AUTH}/${ROUTER_KEYS.REGISTER}`}
						>
							Sign Up
						</Link>
					</>
				) : (
					<Link to={`/${ROUTER_KEYS.AUTH}/${ROUTER_KEYS.LOGIN}`}>
						Back to login
					</Link>
				)}
			</div>
		</form>
	);
};

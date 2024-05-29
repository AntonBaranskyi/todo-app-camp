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
	} = useForm({ defaultValues: { password: '', email: '' }, mode: 'onBlur' });

	const onHandleSubmit = (data: IUserLogin): void => {
		if (isLogin) {
			loginOneUser(data);

			return;
		}
		signUpOneUser(data);
		toggleVerificateUser(true);
	};

	if (isAuth) {
		return <Navigate to="/" />;
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
					<Link to="/auth/forgot">Forgot password?</Link>
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
						<Link to="/auth/register">Sign Up</Link>
					</>
				) : (
					<Link to="/auth/login">Back to login</Link>
				)}
			</div>
		</form>
	);
};

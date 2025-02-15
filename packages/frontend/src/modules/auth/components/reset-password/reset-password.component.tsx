import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { EditForm } from '../edit-form';
import { Button } from '@blueprintjs/core';
import { resetButton } from './reset-password.styles';
import { useAuthStore } from '~store/auth-store/auth.store';
import { DEFAULT_VALUES } from '~modules/auth/constants/defaultValues';
import { ROUTER_KEYS } from '~shared/keys';

export const ResetPassword = (): React.ReactNode => {
	const { userToken } = useParams();
	const navigate = useNavigate();
	const updatePassword = useAuthStore((state) => state.updatePassword);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<{ password: string }>({
		mode: 'onBlur',
		defaultValues: DEFAULT_VALUES.EDIT_PASSWORD,
	});

	const onHandleSubmit = (data: { password: string }): void => {
		localStorage.setItem('token', userToken);
		updatePassword(data.password);
		navigate(ROUTER_KEYS.ALL_MATCH);
	};

	const formRef = useRef<HTMLFormElement>(null);

	const onButtonSubmit = (): void => {
		formRef.current?.dispatchEvent(
			new Event('submit', { cancelable: true, bubbles: true }),
		);
	};

	return (
		<div>
			<EditForm
				register={register}
				ref={formRef}
				onSubmit={handleSubmit(onHandleSubmit)}
				errors={errors}
			/>

			<div className={resetButton}>
				<Button
					text="Reset password"
					type="submit"
					onClick={onButtonSubmit}
					disabled={!isValid}
				/>
			</div>
		</div>
	);
};

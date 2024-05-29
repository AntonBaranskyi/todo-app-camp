import React from 'react';
import { InputAuth } from '../InputAuth';
import { useForm } from 'react-hook-form';
import { Button } from '@blueprintjs/core';
import { buttonWrapper } from './forgot-password.styles';
import authService from '~modules/auth/service/auth.service';
import { useCommonStore } from '~store/common-store/common.store';
import { DEFAULT_VALUES } from '~modules/auth/constants/defaultValues';

type ForgotPasswordFormValues = {
	email: string;
};

export const ForgotPassword = (): React.ReactNode => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({
		defaultValues: DEFAULT_VALUES.FORGOT_PASSWORD,
		mode: 'onBlur',
	});

	const toggleForgetModal = useCommonStore(
		(state) => state.toggleForgetModal,
	);

	const onHandleSubmit = async (
		data: ForgotPasswordFormValues,
	): Promise<void> => {
		await authService.forgotPassword(data);
		toggleForgetModal({ bool: true, email: data.email });
	};

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<InputAuth<ForgotPasswordFormValues>
				label="Forgot Password?"
				register={register}
				name="email"
				errors={errors}
				placeholder="Write your email"
			/>

			<div className={buttonWrapper}>
				<Button text="Continue" disabled={!isValid} type="submit" />
			</div>
		</form>
	);
};

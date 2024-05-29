// EditUser.tsx

import React, { useRef } from 'react';
import { Button, DialogBody, DialogFooter } from '@blueprintjs/core';
import { useForm } from 'react-hook-form';
import { useCommonStore } from '~store/common-store/common.store';
import { EditForm } from '../edit-form';
import { useAuthStore } from '~store/auth-store/auth.store';

export const EditUser = (): React.ReactNode => {
	const toggleEditUser = useCommonStore((state) => state.toggleEditUser);
	const updatePassword = useAuthStore((state) => state.updatePassword);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<{ password: string }>({
		mode: 'onBlur',
		defaultValues: { password: '' },
	});

	const formRef = useRef<HTMLFormElement>(null);

	const onHandleSubmit = (data: { password: string }): void => {
		updatePassword(data.password);
		toggleEditUser(false);
	};

	const onButtonSubmit = (): void => {
		formRef.current?.dispatchEvent(
			new Event('submit', { cancelable: true, bubbles: true }),
		);
	};

	return (
		<>
			<DialogBody>
				<EditForm
					register={register}
					errors={errors}
					onSubmit={handleSubmit(onHandleSubmit)}
					ref={formRef}
				/>
			</DialogBody>
			<DialogFooter
				actions={
					<>
						<Button intent="none" text="Close" />
						<Button
							intent="primary"
							text="Submit"
							disabled={!isValid}
							onClick={onButtonSubmit}
						/>
					</>
				}
			/>
		</>
	);
};

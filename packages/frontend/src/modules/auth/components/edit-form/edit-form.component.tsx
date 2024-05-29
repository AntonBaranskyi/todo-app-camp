// EditUserForm.tsx

import React, { forwardRef } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { InputAuth } from '../common/InputAuth';
import { editUserWrapper } from './edit-form.styles';

interface EditUserFormProps {
	register: UseFormRegister<{ password: string }>;
	errors: FieldErrors<{ password: string }>;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const EditForm = forwardRef<HTMLFormElement, EditUserFormProps>(
	({ register, errors, onSubmit }, ref) => (
		<form className={editUserWrapper} onSubmit={onSubmit} ref={ref}>
			<InputAuth
				label="Change password"
				placeholder="Write new password"
				register={register}
				name="password"
				errors={errors}
			/>
		</form>
	),
);

import React from 'react';
import { createInput, createSection } from './todo-form-field.styles';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Input } from '~shared/components/input';

type FormValues = {
	title: string;
	description: string;
	completed: boolean;
};

type FormFieldProps = {
	label: string;
	name: keyof FormValues;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	errorMessage: string;
	placeholder: string;
};

export const TodoFormField: React.FC<FormFieldProps> = ({
	label,
	name,
	register,
	errors,
	errorMessage,
	placeholder,
}) => {
	return (
		<div className={createSection}>
			<label>{label}</label>
			<Input
				placeholder={placeholder}
				className={createInput}
				{...register(name, {
					required: `The ${name} is required`,
					minLength: {
						value: 2,
						message: `${name} must be at least 2 characters long`,
					},
				})}
			/>
			{errors[name] && (
				<span className={errorMessage}>{errors[name].message}</span>
			)}
		</div>
	);
};

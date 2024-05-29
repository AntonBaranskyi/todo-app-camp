import React from 'react';
import {
	errorMessage,
	inputAuthWrapper,
	inputItem,
	inputLabel,
} from './InputAuth.styles';
import { Input } from '~shared/components/input';
import { FieldErrors, UseFormRegister, Path } from 'react-hook-form';
import { VALIDATIONS } from '~modules/auth/constants/valudationRules';

// Define the prop types
type Props<T> = {
	label: string;
	placeholder: string;
	name: Path<T>;
	errors: FieldErrors<T>;
	register: UseFormRegister<T>;
};

// Make the component generic
export const InputAuth = <T,>({
	label,
	placeholder,
	register,
	name,
	errors,
}: Props<T>): React.ReactNode => {
	return (
		<div className={inputAuthWrapper}>
			<label className={inputLabel}>{label}</label>
			<Input
				className={inputItem}
				placeholder={placeholder}
				{...register(
					name,
					VALIDATIONS[name as keyof typeof VALIDATIONS],
				)}
			/>

			{errors[name] && (
				<p className={errorMessage}>{errors[name]?.message}</p>
			)}
		</div>
	);
};

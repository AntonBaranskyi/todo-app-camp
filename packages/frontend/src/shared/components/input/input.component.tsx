import classNames from 'classnames';
import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { inputStyles } from './input.styles';

interface InputProps extends ComponentPropsWithRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(inputProps, ref) => {
		return (
			<input
				className={classNames(inputStyles, inputProps.className)}
				{...inputProps}
				ref={ref}
			/>
		);
	},
);

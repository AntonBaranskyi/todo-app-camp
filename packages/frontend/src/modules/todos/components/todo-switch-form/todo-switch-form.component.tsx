import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { Switch } from '@blueprintjs/core';
import { switchWrapper } from './todo-switch-form.styles';
import { PublicTodo, TodoName } from '~modules/todos/types/todo-form.types';

type CompletedSwitchProps = {
	name: TodoName;
	control: Control<PublicTodo>;
	label: string;
};

const CompletedSwitch: React.FC<CompletedSwitchProps> = ({
	name,
	control,
	label,
}): React.ReactNode => {
	return (
		<div className={switchWrapper}>
			<p>{label}</p>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Switch
						checked={field.value as boolean}
						onChange={(e) => field.onChange(e.target.checked)}
					/>
				)}
			/>
		</div>
	);
};

export default CompletedSwitch;

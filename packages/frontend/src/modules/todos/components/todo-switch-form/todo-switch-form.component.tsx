import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { Switch } from '@blueprintjs/core';
import { switchWrapper } from './todo-switch-form.styles';

type CompletedSwitchProps = {
	name: 'title' | 'description' | 'completed' | 'isPrivate';
	control: Control<{
		title: string;
		description: string;
		completed: boolean;

		isPrivate: boolean;
	}>;
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

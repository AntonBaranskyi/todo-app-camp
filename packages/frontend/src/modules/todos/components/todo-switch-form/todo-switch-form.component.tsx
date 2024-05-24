import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { Switch } from '@blueprintjs/core';
import { switchWrapper } from './todo-switch-form.styles';

type CompletedSwitchProps = {
	name: 'title' | 'description' | 'completed';
	control: Control<{
		title: string;
		description: string;
		completed: boolean;
	}>;
};

const CompletedSwitch: React.FC<CompletedSwitchProps> = ({
	name,
	control,
}): React.ReactNode => {
	return (
		<div className={switchWrapper}>
			<p>Is completed</p>
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

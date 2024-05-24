import { DialogBody } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTodoStore } from '~store/todo-store/todo.store';
import { ITodo } from '~store/todo-store/todo.store.types';
import {
	createInput,
	createSection,
	errorMessage,
} from './todo-dialog-body.styles';
import { Input } from '~shared/components/input';
import CompletedSwitch from '../todo-switch-form/todo-switch-form.component';

type Props = {
	onSubmit: (data: ITodo) => void;
	onFormStateChange: (isValid: boolean) => void;
	formRef: React.RefObject<HTMLFormElement>;
};

export const TodoDialogBody: React.FC<Props> = ({
	onSubmit,
	onFormStateChange,
	formRef,
}): React.ReactNode => {
	const { editingTodo } = useTodoStore((state) => state);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			title: editingTodo?.title,
			description: editingTodo?.description,
			completed: editingTodo?.completed || false,
		},
		mode: 'onBlur',
	});

	const onHandleSubmit = (data: ITodo): void => {
		onSubmit(data);
	};

	useEffect(() => {
		onFormStateChange(isValid);
	}, [isValid, onFormStateChange]);

	const getError = (fieldName): React.ReactNode => {
		return (
			errors[fieldName] && (
				<span className={errorMessage}>
					{errors[fieldName].message}
				</span>
			)
		);
	};

	const handleFormSubmit = handleSubmit(onHandleSubmit);
	return (
		<DialogBody>
			<form onSubmit={handleFormSubmit} ref={formRef}>
				<div className={createSection}>
					<p>Todo title</p>
					<Input
						placeholder="Todo title"
						className={createInput}
						{...register('title', {
							required: 'Title is required',
							minLength: {
								value: 2,
								message:
									'Title must be at least 2 characters long',
							},
						})}
					/>
					{getError('title')}
				</div>

				<div className={createSection}>
					<p>Todo description</p>
					<Input
						placeholder="Todo description"
						className={createInput}
						defaultValue={editingTodo?.description}
						{...register('description', {
							minLength: {
								value: 4,
								message:
									'Description must be at least 4 characters long',
							},
						})}
					/>

					{getError('description')}
				</div>

				<CompletedSwitch name="completed" control={control} />
			</form>
		</DialogBody>
	);
};

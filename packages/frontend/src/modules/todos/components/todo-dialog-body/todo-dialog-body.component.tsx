import { DialogBody } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTodoStore } from '~store/todo-store/todo.store';
import { ITodo } from '~store/todo-store/todo.store.types';
import { errorMessage } from './todo-dialog-body.styles';
import CompletedSwitch from '../todo-switch-form/todo-switch-form.component';
import { TodoFormField } from '../todo-form-field';

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

	const handleFormSubmit = handleSubmit(onHandleSubmit);
	return (
		<DialogBody>
			<form onSubmit={handleFormSubmit} ref={formRef}>
				<TodoFormField
					label="Todo title"
					name="title"
					register={register}
					errors={errors}
					errorMessage={errorMessage}
					placeholder="Todo title"
				/>

				<TodoFormField
					label="Todo description"
					name="description"
					register={register}
					errors={errors}
					errorMessage={errorMessage}
					placeholder="Todo description"
				/>

				<CompletedSwitch name="completed" control={control} />
			</form>
		</DialogBody>
	);
};

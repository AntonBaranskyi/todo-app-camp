import { Button, DialogBody, DialogFooter, Switch } from '@blueprintjs/core';
import React, { useRef } from 'react';
import { Input } from '~shared/components/input';
import {
	createInput,
	createSection,
	errorMessage,
	switchWrapper,
} from './todo-create-modal.styles';
import { Controller, useForm } from 'react-hook-form';
import { useTodoStore } from '~store/todo-store/todo.store';
import { ITodo } from '~store/todo-store/todo.store.types';
import { useCommonStore } from '~store/common-store/common.store';

export const CreateModal = (): React.ReactNode => {
	const {
		createOneTodo,
		addTodoLoading,
		editingTodo,
		updateOneTodo,
		clearEditingTodo,
	} = useTodoStore((state) => state);
	const { toggleModalOpen, isEditing, toggleEdditing } = useCommonStore(
		(state) => state,
	);

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
		const { title, completed, description } = data;

		const todoData: Partial<ITodo> = { title, completed };

		if (description) {
			todoData.description = description;
		}

		if (isEditing) {
			updateOneTodo({ id: editingTodo.id, data: todoData });
			toggleModalOpen();
			toggleEdditing(false);
			clearEditingTodo();

			return;
		}

		createOneTodo(todoData as ITodo);
		toggleModalOpen();
	};
	const formRef = useRef<HTMLFormElement>(null);

	console.log(editingTodo);

	const handleFormSubmit = handleSubmit(onHandleSubmit);

	return (
		<>
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
						{errors.title && (
							<span className={errorMessage}>
								{errors.title.message}
							</span>
						)}
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

						{errors.description && (
							<span className={errorMessage}>
								{errors.description.message}
							</span>
						)}
					</div>

					<div className={switchWrapper}>
						<p>Is completed</p>
						<Controller
							name="completed"
							control={control}
							render={({ field }) => (
								<Switch
									checked={field.value}
									onChange={(e) =>
										field.onChange(e.target.checked)
									}
								/>
							)}
						/>
					</div>
				</form>
			</DialogBody>

			<DialogFooter
				actions={
					<>
						<Button
							intent="none"
							text="Close"
							onClick={toggleModalOpen}
						/>
						<Button
							intent="primary"
							text={isEditing ? 'Edit' : 'Submit'}
							type="submit"
							disabled={!isValid}
							onClick={handleFormSubmit}
							loading={addTodoLoading}
						/>
					</>
				}
			></DialogFooter>
		</>
	);
};

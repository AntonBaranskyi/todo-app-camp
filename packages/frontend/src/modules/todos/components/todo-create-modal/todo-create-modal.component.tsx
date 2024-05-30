import { Button, DialogFooter } from '@blueprintjs/core';
import React, { useRef, useState } from 'react';
import { useTodoStore } from '~store/todo-store/todo.store';
import { useCommonStore } from '~store/common-store/common.store';
import { TodoDialogBody } from '../todo-dialog-body';
import { ITodo } from '~store/todo-store/todo.store.types';
import { useAuthStore } from '~store/auth-store/auth.store';

export const CreateModal = (): React.ReactNode => {
	const { toggleModalOpen, isEditing, toggleEdditing } = useCommonStore(
		(state) => state,
	);

	const user = useAuthStore((state) => state.user);
	const {
		addTodoLoading,
		editingTodo,
		updateOneTodo,
		clearEditingTodo,
		createOneTodo,
	} = useTodoStore((state) => state);

	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	console.log(user);

	const handleFormSubmit = (data: ITodo): void => {
		const { title, completed, description, isPrivate } = data;

		const todoData: Partial<ITodo> = {
			title,
			completed,
			description: description ?? '',
			isPrivate,
			userId: user?.id || null,
		};

		if (isEditing) {
			updateOneTodo({ id: editingTodo.id, data: todoData });
			toggleModalOpen(false);
			toggleEdditing(false);
			clearEditingTodo();
			return;
		}

		createOneTodo(todoData as ITodo);
		toggleModalOpen(false);
	};

	const handleSubmitClick = (): void => {
		if (formRef.current) {
			formRef.current.dispatchEvent(
				new Event('submit', { cancelable: true, bubbles: true }),
			);
		}
	};

	const handleModalClose = (): void => {
		toggleModalOpen(false);
	};

	return (
		<>
			<TodoDialogBody
				onFormStateChange={setIsFormValid}
				onSubmit={handleFormSubmit}
				formRef={formRef}
			/>

			<DialogFooter
				actions={
					<>
						<Button
							intent="none"
							text="Close"
							onClick={handleModalClose}
						/>
						<Button
							intent="primary"
							text={isEditing ? 'Edit' : 'Submit'}
							type="submit"
							disabled={!isFormValid}
							onClick={handleSubmitClick}
							loading={addTodoLoading}
						/>
					</>
				}
			/>
		</>
	);
};

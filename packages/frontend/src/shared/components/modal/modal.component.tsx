import { Dialog } from '@blueprintjs/core';
import React from 'react';
import { useCommonStore } from '~store/common-store/common.store';
import { modalStyles } from './modal.styles';
import { useTodoStore } from '~store/todo-store/todo.store';

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
};

export const Modal: React.FC<Props> = ({
	children,
	isOpen = false,
}): React.ReactNode => {
	const {
		toggleModalOpen,
		toggleEdditing,
		toggleForgetModal,
		toggleEditUser,
		toggleVerificateUser,
	} = useCommonStore((state) => state);

	const clearEditingTodo = useTodoStore((state) => state.clearEditingTodo);

	const handleCloseModal = (): void => {
		toggleEdditing(false);
		toggleModalOpen(false);
		toggleForgetModal({ bool: false, email: '' });
		toggleEditUser(false);
		toggleVerificateUser(false);
		clearEditingTodo();
	};

	return (
		<Dialog
			isOpen={isOpen}
			title="Todo APP"
			onClose={handleCloseModal}
			className={modalStyles}
		>
			{children}
		</Dialog>
	);
};

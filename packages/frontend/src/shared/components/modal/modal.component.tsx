import { Dialog } from '@blueprintjs/core';
import React from 'react';
import { useCommonStore } from '~store/common-store/common.store';
import { modalStyles } from './modal.styles';

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
};

export const Modal: React.FC<Props> = ({
	children,
	isOpen = false,
}): React.ReactNode => {
	const { toggleModalOpen, toggleEdditing } = useCommonStore(
		(state) => state,
	);
	const handleCloseModal = (): void => {
		toggleEdditing(false);
		toggleModalOpen();
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

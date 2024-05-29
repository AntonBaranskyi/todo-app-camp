import React from 'react';
import { Outlet } from 'react-router-dom';
import { authContainer } from './auth.page.styles';
import { Modal } from '~shared/components/modal';
import { useCommonStore } from '~store/common-store/common.store';
import { ModalForget } from '../components/modal-forget';
import { Header } from '~shared/components/header';

export const AuthPage = (): React.ReactNode => {
	const { forgetModalOpen, verificateModal } = useCommonStore(
		(state) => state,
	);

	return (
		<>
			<Header />
			<div className={authContainer}>
				<Outlet />
				<Modal isOpen={forgetModalOpen || verificateModal}>
					<ModalForget />
				</Modal>
			</div>
		</>
	);
};

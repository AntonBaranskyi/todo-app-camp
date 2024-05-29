import React, { ReactNode } from 'react';
import { popoverBodyWrapper, popoverMenuItem } from './popover-body.styles';
import { useAuthStore } from '~store/auth-store/auth.store';
import { useCommonStore } from '~store/common-store/common.store';

export const PopoverBody = (): ReactNode => {
	const logoutUser = useAuthStore((state) => state.logoutUser);
	const toggleEditUser = useCommonStore((state) => state.toggleEditUser);

	const handleOpenEditModal = (): void => {
		toggleEditUser(true);
	};

	return (
		<div className={popoverBodyWrapper}>
			<div className={popoverMenuItem} onClick={handleOpenEditModal}>
				<p>Edit Profile</p>
			</div>

			<div className={popoverMenuItem} onClick={logoutUser}>
				<p>Logout</p>
			</div>
		</div>
	);
};

import { DialogBody } from '@blueprintjs/core';
import React from 'react';
import { useAuthStore } from '~store/auth-store/auth.store';
import { useCommonStore } from '~store/common-store/common.store';

export const ModalForget = (): React.ReactNode => {
	const { verificateModal, forgotEmail } = useCommonStore((state) => state);
	const user = useAuthStore((state) => state.user);

	return (
		<DialogBody>
			<p>
				Check{' '}
				<strong>{verificateModal ? user?.email : forgotEmail}</strong>
				to {verificateModal && ' verificate your account'}
				{forgotEmail && ' reset your password'}
			</p>
		</DialogBody>
	);
};

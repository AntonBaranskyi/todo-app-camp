import React, { useCallback, useState } from 'react';
import { GlobalContainer } from '~shared/layouts/container.layout';
import {
	headerStyles,
	headerTitle,
	headerWrapper,
} from './header.component.styles';
import { Link } from 'react-router-dom';
import { useAuthStore } from '~store/auth-store/auth.store';
import { Button } from '@blueprintjs/core';
import { PopoverItem } from '../popover-item';
import { PopoverBody } from '../popover-body';

export const Header = (): React.ReactNode => {
	const isAuth = useAuthStore((state) => state.isAuth);

	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	const handleChangePopover = useCallback((): void => {
		setIsPopoverOpen((prev) => !prev);
	}, []);

	return (
		<header className={headerStyles}>
			<GlobalContainer>
				<div className={headerWrapper}>
					<Link to="/">
						<h2 className={headerTitle}>
							Todo <span>App</span>
						</h2>
					</Link>

					{isAuth ? (
						<PopoverItem
							isOpen={isPopoverOpen}
							placement="bottom"
							content={<PopoverBody />}
							changeFunc={handleChangePopover}
						>
							<Button text="My Profile" intent="primary" large />
						</PopoverItem>
					) : (
						<Link to="/auth/login">
							<Button text="Login" intent="primary" large />
						</Link>
					)}
				</div>
			</GlobalContainer>
		</header>
	);
};

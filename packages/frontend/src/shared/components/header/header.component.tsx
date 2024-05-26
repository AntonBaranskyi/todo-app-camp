import React from 'react';
import { GlobalContainer } from '~shared/layouts/container.layout';
import {
	headerStyles,
	headerTitle,
	headerWrapper,
} from './header.component.styles';
import Button from '../button/button.component';
import { Link } from 'react-router-dom';

export const Header = (): React.ReactNode => {
	return (
		<header className={headerStyles}>
			<GlobalContainer>
				<div className={headerWrapper}>
					<Link to="/">
						<h2 className={headerTitle}>
							Todo <span>App</span>
						</h2>
					</Link>

					<Button text="My Profile" />
				</div>
			</GlobalContainer>
		</header>
	);
};

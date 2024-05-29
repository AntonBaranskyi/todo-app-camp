import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const popoverBodyWrapper = css`
	padding: ${theme.spaces.xs};
	background-color: ${theme.colors.white};
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	border-radius: ${theme.spaces.xxs};
	min-width: 200px;
	display: flex;
	flex-direction: column;
	gap: ${theme.spaces.xs};
`;

export const popoverMenuItem = css`
	padding: ${theme.spaces.xxs} ${theme.spaces.xs};
	cursor: pointer;
	border-radius: ${theme.spaces.xxs};
	transition: background-color 0.2s;

	&:hover {
		background-color: ${theme.colors.dimGray};
	}
`;

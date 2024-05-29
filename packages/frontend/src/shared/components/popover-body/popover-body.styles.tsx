import { css } from '@emotion/css';

export const popoverBodyWrapper = css`
	padding: 8px;
	background-color: #ffffff;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	min-width: 200px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const popoverMenuItem = css`
	padding: 8px 12px;
	cursor: pointer;
	border-radius: 4px;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f0f0f0;
	}
`;

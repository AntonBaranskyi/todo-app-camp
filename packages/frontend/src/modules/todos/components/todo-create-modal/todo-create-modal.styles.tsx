import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const modalTodo = css``;

export const createSection = css`
	margin-bottom: 12px;
`;

export const createInput = css`
	width: 100%;
	padding-block: 12px;
	padding-inline: 10px;
	border: 1px solid ${theme.colors.dimGray};
`;

export const switchWrapper = css`
	display: flex;

	gap: 5px;

	justify-content: center;
`;

export const errorMessage = css`
	color: ${theme.colors.error};
`;

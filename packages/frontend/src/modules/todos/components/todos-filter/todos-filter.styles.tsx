import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const todosFilterWrapper = css`
	display: flex;
`;

export const todoFilterBtn = css`
	padding: ${theme.spaces.xs};
	border: 1px solid ${theme.colors.dimGray};
	cursor: pointer;
`;

export const activeFilterBtn = css`
	background-color: ${theme.colors.blackCoral};
	color: ${theme.colors.white} !important;
`;

import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const createSection = css`
	margin-bottom: ${theme.spaces.xs};
`;

export const createInput = css`
	width: 100%;
	padding: ${theme.spaces.xs};
	border: 1px solid ${theme.colors.dimGray};
`;

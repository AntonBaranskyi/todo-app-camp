import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const switchWrapper = css`
	display: flex;

	gap: ${theme.spaces.xxs};

	justify-content: center;
`;

export const errorMessage = css`
	color: ${theme.colors.error};
`;

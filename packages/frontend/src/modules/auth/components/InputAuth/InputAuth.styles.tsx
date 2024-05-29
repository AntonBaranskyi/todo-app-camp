import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const inputAuthWrapper = css`
	margin-bottom: ${theme.spaces.s};

	display: flex;
	flex-direction: column;
`;

export const inputItem = css`
	width: 350px;
	height: 48px;
	background: ${theme.colors.inputColor};
	border: 2px solid ${theme.colors.inputColor};
	border-radius: ${theme.spaces.xxs};
	padding-inline: ${theme.spaces.s};
	padding-block: ${theme.spaces.xs};
`;

export const inputLabel = css`
	font-weight: ${theme.fonts.weightSemiBold};
	font-size: ${theme.fonts.sizeXs};
	line-height: ${theme.fonts.lineHeightM};
	color: ${theme.colors.black};
	margin-bottom: ${theme.spaces.xxs};
`;

export const errorMessage = css`
	color: ${theme.colors.error};
`;

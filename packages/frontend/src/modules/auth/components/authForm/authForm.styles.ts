import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const authTitle = css`
	font-weight: ${theme.fonts.weightSemiBold};
	font-size: ${theme.fonts.sizeXxl};
	line-height: ${theme.fonts.lineHeightXl};
	margin-bottom: ${theme.spaces.s};

	text-align: center;
`;

export const forgotWrapper = css`
	display: flex;
	justify-content: flex-end;

	margin-bottom: ${theme.spaces.xms};

	cursor: pointer;
`;

export const submitButton = css`
	width: 100%;

	margin-bottom: ${theme.spaces.xs};

	&:disabled {
		cursor: not-allowed;
	}
`;

export const wrapperDont = css`
	display: flex;
	justify-content: center;

	text-align: center;
`;

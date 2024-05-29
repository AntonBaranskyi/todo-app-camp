import { css } from '@emotion/css';

export const authTitle = css`
	font-weight: 700;
	font-size: 28px;
	line-height: 34px;
	margin-bottom: 20px;

	text-align: center;
`;

export const forgotWrapper = css`
	display: flex;
	justify-content: flex-end;

	margin-bottom: 15px;

	cursor: pointer;
`;

export const submitButton = css`
	width: 100%;

	margin-bottom: 10px;

	&:disabled {
		cursor: not-allowed;
	}
`;

export const wrapperDont = css`
	display: flex;
	justify-content: center;

	text-align: center;
`;

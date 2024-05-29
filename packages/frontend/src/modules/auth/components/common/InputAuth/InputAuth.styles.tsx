import { css } from '@emotion/css';

export const inputAuthWrapper = css`
	margin-bottom: 20px;

	display: flex;
	flex-direction: column;
`;

export const inputItem = css`
	width: 350px;
	height: 48px;
	background: #e0e0e0;
	border: 2px solid #e0e0e0;
	border-radius: 5px;
	padding-inline: 20px;
	padding-block: 12px;
`;

export const inputLabel = css`
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	color: #000;
	margin-bottom: 3px;
`;

export const errorMessage = css`
	color: red;
`;

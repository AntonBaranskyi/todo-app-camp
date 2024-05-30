import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const todoSingleTitle = css`
	margin-bottom: ${theme.spaces.s};
`;

export const todoSingleDescrName = css`
	margin-bottom: ${theme.spaces.sm};
`;

export const todoCheckedWrapper = css`
	display: flex;
	justify-content: space-between;

	margin-bottom: ${theme.spaces.lgm};
`;

export const buttonStyles = css`
	width: 200px;
`;

export const loadingWrapper = css`
	display: flex;
	justify-content: center;
`;

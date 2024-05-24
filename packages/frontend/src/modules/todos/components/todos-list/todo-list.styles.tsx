import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const todoListStyles = css`
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: ${theme.spaces.xms};
`;

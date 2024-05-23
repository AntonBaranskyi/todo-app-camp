import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const filtersWrapper = css`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */

	flex-direction: column;

	gap: ${theme.spaces.xs};

	margin-bottom: ${theme.spaces.m};

	@media (min-width: ${theme.breakpoints.smallTablet}) {
		flex-direction: row;
	}
`;

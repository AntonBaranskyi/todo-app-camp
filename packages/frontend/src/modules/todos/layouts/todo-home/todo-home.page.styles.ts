import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const filtersWrapper = css`
	display: flex;
	justify-content: space-between;

	flex-direction: column;

	gap: ${theme.spaces.xs};

	margin-bottom: ${theme.spaces.m};

	margin-top: ${theme.spaces.xl};

	@media (min-width: ${theme.breakpoints.smallTablet}) {
		flex-direction: row;
	}
`;

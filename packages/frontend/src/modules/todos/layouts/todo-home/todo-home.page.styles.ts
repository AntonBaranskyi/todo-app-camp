import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const filtersWrapper = css`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */

	flex-direction: column;

	gap: 10px;

	margin-bottom: 30px;

	@media (min-width: ${theme.breakpoints.smallTablet}) {
		flex-direction: row;
	}
`;

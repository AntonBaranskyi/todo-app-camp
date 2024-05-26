import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const modalStyles = css`
	width: 350px;

	@media (min-width: ${theme.breakpoints.smallTablet}) {
		width: 550px;
	}
`;

import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const layoutContainer = css`
	padding-inline: ${theme.spaces.s};
	@media (min-width: ${theme.breakpoints.tablet}) {
		padding-inline: ${theme.spaces.sm};
	}

	@media (min-width: ${theme.breakpoints.dekstop}) {
		padding-inline: ${theme.spaces.xl};

		max-width: 1440px;
		margin-inline: auto;
	}
`;

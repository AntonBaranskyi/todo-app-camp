import { css } from '@emotion/css';

import { theme } from '~shared/styles';

export const inputStyles = css`
	border-radius: 3px;
	padding-inline: ${theme.spaces.xs};
	padding-block: ${theme.spaces.xs};

	border: 1px solid ${theme.colors.dimGray};

	font-size: ${theme.fonts.sizeS};
`;

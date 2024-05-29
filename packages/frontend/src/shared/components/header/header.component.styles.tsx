import { css } from '@emotion/css';

import { theme } from '~shared/styles';

export const headerStyles = css`
	padding-block: ${theme.spaces.xs};

	background-color: ${theme.colors.japaneseIndigo};
`;

export const headerWrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const headerTitle = css`
	color: ${theme.colors.white};

	font-size: ${theme.fonts.sizeXxl};

	span {
		color: ${theme.colors.mediumVioletRed};
	}
`;

import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const sliderItem = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${theme.spaces.xs};

	border-radius: ${theme.spaces.xxs};

	width: 250px;
	height: 180px;

	border: 1px solid ${theme.colors.dimGray};

	@media (min-width: ${theme.breakpoints.tablet}) {
		width: 300px;
	}
`;

export const todoTitle = css`
	text-align: center;

	margin-bottom: ${theme.spaces.xs};
`;

export const todoBottomWrapper = css`
	display: flex;
	align-items: flex-start;
`;

export const bottomWrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const buttonsWrapper = css`
	display: flex;
	gap: 8px;
`;

export const switchStyle = css`
	margin: 0;
`;

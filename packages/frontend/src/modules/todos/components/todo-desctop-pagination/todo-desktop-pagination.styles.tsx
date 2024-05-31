import { css } from '@emotion/css';
import { theme } from '~shared/styles';

export const paginationWrapper = css`
	display: flex;
	justify-content: center;
`;

export const pagination = css`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin-bottom: 80px;
	flex-wrap: wrap;

	li {
		list-style: none;
		display: inline-block;
		margin: 0;

		a {
			display: block;
			color: ${theme.colors.dimGray};
			border: 1px solid ${theme.colors.dimGray};
			border-radius: 48px;
			width: 32px;
			height: 32px;
			line-height: ${theme.fonts.sizeXxl};
			text-align: center;
			cursor: pointer;
			position: relative;

			&:hover {
				color: ${theme.colors.white};
				background-color: ${theme.colors.mediumVioletRed};

				svg use {
					fill: ${theme.colors.white};
				}
			}

			svg {
				position: absolute;
				top: 50%;
				left: 51%;
				transform: translate(-50%, -50%);
			}
		}

		&:active {
			border: none;
		}

		&.disabled {
			a {
				/* border: 1px solid ${theme.colors.dimGray}; */
				cursor: not-allowed;

				svg {
					use {
					}
				}
			}
		}

		&.selected {
			a {
				color: ${theme.colors.white};
				background-color: ${theme.colors.mediumVioletRed};
				border: none;
			}
		}
	}
`;

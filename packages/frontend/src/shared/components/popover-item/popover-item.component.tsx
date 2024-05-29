import React from 'react';

import { Popover } from '@blueprintjs/core';

type Props = {
	placement: 'bottom' | 'top';
	content: any;
	isOpen: boolean;
	children: React.ReactNode;
	changeFunc: (isOpen: boolean) => void;
};

export const PopoverItem: React.FC<Props> = ({
	placement,
	content,
	isOpen,
	children,
	changeFunc,
}): React.ReactNode => {
	const handleInteraction = (nextOpenState: boolean): void => {
		if (nextOpenState !== isOpen) {
			changeFunc(nextOpenState);
		}
	};

	return (
		<Popover
			isOpen={isOpen}
			interactionKind="click"
			placement={placement}
			content={content}
			onInteraction={handleInteraction}
		>
			{children}
		</Popover>
	);
};

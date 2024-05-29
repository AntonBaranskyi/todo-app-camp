import { OverlayToaster, Position } from '@blueprintjs/core';
import { createRoot } from 'react-dom/client';

export const toaster = await OverlayToaster.createAsync(
	{ position: Position.TOP_LEFT },
	{
		domRenderer: (toaster, containerElement) =>
			createRoot(containerElement).render(toaster),
	},
);

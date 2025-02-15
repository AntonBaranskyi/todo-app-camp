import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

interface ICounterStore {
	counter: number;
	updateCounter: (offset: number) => () => void;
	resetCounter: () => void;
}

export const useCounterStore = create<ICounterStore>()(
	devtools((set) => {
		return {
			counter: 0,
			updateCounter: (offset: number) => {
				return (): void => {
					set((state) => {
						return {
							counter: state.counter + offset,
						};
					});
				};
			},
			resetCounter: (): void => {
				set({
					counter: 0,
				});
			},
		};
	}),
);

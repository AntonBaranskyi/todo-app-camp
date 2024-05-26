import { create } from 'zustand';
import { ICommonState } from './common.store.types';

export const useCommonStore = create<ICommonState>((set) => ({
	addTodoModalOpen: false,
	isEditing: false,

	toggleModalOpen: (): void => {
		set((state) => ({ addTodoModalOpen: !state.addTodoModalOpen }));
	},

	toggleEdditing: (bool: boolean): void => {
		set({ isEditing: bool });
	},
}));

import { create } from 'zustand';
import { ICommonState } from './common.store.types';

export const useCommonStore = create<ICommonState>((set) => ({
	addTodoModalOpen: false,
	isEditing: false,
	forgetModalOpen: false,
	editUserModal: false,
	forgotEmail: '',
	verificateModal: false,

	toggleModalOpen: (bool): void => {
		set({ addTodoModalOpen: bool });
	},

	toggleEdditing: (bool: boolean): void => {
		set({ isEditing: bool });
	},

	toggleForgetModal: ({
		bool,
		email,
	}: {
		bool: boolean;
		email: string;
	}): void => {
		set({ forgetModalOpen: bool });

		set({ forgotEmail: email });
	},

	toggleEditUser: (bool: boolean): void => {
		set({ editUserModal: bool });
	},

	toggleVerificateUser: (bool: boolean): void => {
		set({ verificateModal: bool });
	},
}));

export interface ICommonState {
	addTodoModalOpen: boolean;
	toggleModalOpen: (bool: boolean) => void;

	isEditing: boolean;
	toggleEdditing: (bool: boolean) => void;

	forgetModalOpen: boolean;

	editUserModal: boolean;
	verificateModal: boolean;

	toggleForgetModal: ({
		bool,
		email,
	}: {
		bool: boolean;
		email: string;
	}) => void;

	toggleEditUser: (bool: boolean) => void;
	toggleVerificateUser: (bool: boolean) => void;

	forgotEmail: string;
}

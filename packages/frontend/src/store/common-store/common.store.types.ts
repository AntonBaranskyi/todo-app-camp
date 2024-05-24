export interface ICommonState {
	addTodoModalOpen: boolean;
	toggleModalOpen: () => void;

	isEditing: boolean;
	toggleEdditing: (bool: boolean) => void;
}

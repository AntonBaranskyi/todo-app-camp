// TODO: Put a real types here

export type TodoType = {
	id: number;
	title: string;
	completed: boolean;
	description: string;

	isPrivate: boolean;
	userId?: number | null;
};

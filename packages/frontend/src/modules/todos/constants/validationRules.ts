export const VALIDATION_TODO = {
	title: {
		required: 'The title is required',
		minLength: {
			value: 2,
			message: 'Title must be at least 2 characters long',
		},
		maxLength: {
			value: 100,
			message: 'Title must be at most 100 characters long',
		},
	},
	description: {
		minLength: {
			value: 5,
			message: 'Description must be at least 5 characters long',
		},
		maxLength: {
			value: 500,
			message: 'Description must be at most 500 characters long',
		},
	},
};

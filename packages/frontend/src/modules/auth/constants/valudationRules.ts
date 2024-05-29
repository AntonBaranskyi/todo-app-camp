export const VALIDATIONS = {
	email: {
		required: 'Email is required',
		pattern: {
			value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
			message: 'Invalid email address',
		},
	},
	password: {
		required: 'Password is required',
		minLength: {
			value: 4,
			message: 'Password must be at least 4 characters long',
		},
	},
};

import { body, check } from 'express-validator';

export const todosValidation = [
	body('title')
		.isLength({ min: 2 })
		.withMessage('Title must be at least 2 characters long'),
	body('completed').isBoolean().withMessage('Completed must be a boolean'),
	body('description')
		.custom((value) => {
			if (value === '') {
				return true;
			}
			if (value && value.length >= 4) {
				return true;
			}
			throw new Error('Description must be at least 4 characters long');
		})
		.optional(),
];

export const todosPatchValidation = [
	check().custom((_, { req }) => {
		if (!req.body.title && !req.body.completed && req.body.description) {
			throw new Error(
				'At least one of "title" or "completed" or "description" must be provided',
			);
		}
		return true;
	}),
	body('title')
		.optional()
		.isLength({ min: 2 })
		.withMessage('Title must be at least 2 characters long'),
	body('completed')
		.optional()
		.isBoolean()
		.withMessage('Completed must be a boolean'),

	body('description')
		.optional()
		.isLength({ min: 4 })
		.withMessage('description must be at least 4 characters long'),
];

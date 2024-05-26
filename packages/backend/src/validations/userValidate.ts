import { body } from 'express-validator';

export const userValidation = [
	body('email', 'Wrong format of email').isEmail(),
	body('password', 'Password should contain more than 4 symbols').isLength({
		min: 4,
	}),
];

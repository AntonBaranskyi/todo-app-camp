import userController from '@/controllers/user.controller';
import {
	authenticateJwt,
	isExist,
	tryCatch,
	validateRequest,
} from '@/middlewares/common';
import { MODELS } from '@/types/models.enum';
import {
	forgotPasswordValidation,
	registerValidation,
	updatePasswordValidation,
} from '@/validations/userValidate';
import { Router } from 'express';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
	'/register',
	validateRequest(registerValidation),
	tryCatch(userController.registerUser.bind(userController)),
);

router.post(
	'/login',
	isExist(MODELS.USER),
	validateRequest(registerValidation),
	tryCatch(userController.loginUser.bind(userController)),
);

router.post(
	'/forgot-password',
	isExist(MODELS.USER),
	validateRequest(forgotPasswordValidation),
	tryCatch(userController.forgotPassword.bind(userController)),
);

router.patch(
	'/update-password',
	authenticateJwt,
	validateRequest(updatePasswordValidation),
	tryCatch(userController.updatePassword.bind(userController)),
);

router.get(
	'activate-account',
	tryCatch(userController.verifyEmail.bind(userController)),
);

export default router;

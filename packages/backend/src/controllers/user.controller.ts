import { sendEmail } from '@/helpers/emailTransporter';
import HttpError from '@/helpers/HttpError';
import UserServise from '@/services/user.service';
import { EMAIL } from '@/types/emailEnum';
import { Request, Response } from 'express';

export class UserController {
	constructor(private userServise: UserServise) {}

	async registerUser(req: Request, resp: Response): Promise<void> {
		const { email, password } = req.body;

		const passwordCode = await this.userServise.hashPassword(password);
		const newUser = await this.userServise.registerOne({
			email,
			password: passwordCode,
		});

		const token = await this.userServise.generateToken({ id: newUser.id });
		const activationToken = await this.userServise.generateToken({
			email: newUser.email,
		});

		sendEmail({
			email: newUser.email,
			type: EMAIL.VERIFICATION,
			token: activationToken,
		});

		resp.status(201).send({ ...newUser, token });
	}

	async loginUser(req: Request, resp: Response): Promise<void> {
		const { password, email } = req.body;

		const user = await this.userServise.findOneUser(email);

		const isValidPassword = await this.userServise.checkPassword({
			password,
			hash: user.password,
		});

		if (!isValidPassword) {
			throw HttpError(404, 'Invalid login or password');
		}

		const token = await this.userServise.generateToken({ id: user.id });

		resp.status(200).send({ ...user, token });
	}

	async forgotPassword(req: Request, resp: Response): Promise<void> {
		const { email } = req.body;

		const user = await this.userServise.findOneUser({ email });
		const token = await this.userServise.generateToken({ id: user.id });

		const userToUpdate = { ...user, resetLink: token };

		await this.userServise.updateOneUser({
			id: user.id,
			data: userToUpdate,
		});

		sendEmail({ email, type: EMAIL.FORGOT, token });

		resp.json({ message: `Check your ${email} to reset password` });
	}

	async updatePassword(req: Request, resp: Response): Promise<void> {
		const { password, token } = req.body;

		const user = await this.userServise.findOneUser({ resetLink: token });

		if (!user) {
			throw HttpError(400, 'User with this token does not exist');
		}

		const hashPassword = await this.userServise.hashPassword(password);

		const updatedUser = { ...user, password: hashPassword };

		await this.userServise.updateOneUser({
			id: user.id,
			data: updatedUser,
		});

		resp.json({ message: 'Password was updated' });
	}

	async verifyEmail(req: Request, resp: Response): Promise<void> {
		const { email } = req.body;

		const user = await this.userServise.findOneUser({ email });

		if (!user) {
			throw HttpError(404, 'User with this email does not exist');
		}

		await this.userServise.updateOneUser({
			id: user.id,
			data: { ...user, isVerified: true },
		});

		resp.status(200).redirect(process.env.CLIENT_URL as string);
	}
}

const userController = new UserController(new UserServise());
export default userController;

import { toaster } from '~shared/components/toast/toast.component';
import HttpSerivce from '~shared/services/http.service';
import { IUser, IUserLogin } from '~store/auth-store/auth.store.types';

class AuthService extends HttpSerivce {
	constructor() {
		super();
	}

	async loginUser(data: IUserLogin): Promise<IUser> {
		const response = await this.post({
			url: 'user/login',
			data,
		});

		toaster.show({ message: 'You logged in successfully ' });

		return response.data;
	}

	async signUpUser(data: IUserLogin): Promise<IUser> {
		const response = await this.post({
			url: 'user/register',
			data,
		});

		toaster.show({ message: 'You registred successfully ' });

		return response.data;
	}

	async verificateUser(token: string): Promise<void> {
		await this.get({
			url: `user/activate-account?token=${token}`,
		});
	}

	async changePassword(data: { password: string }): Promise<void> {
		const response = await this.patch({
			url: 'user/update-password',
			data,
		});

		toaster.show({ message: 'You changed your password successfully ' });

		return response.data;
	}

	async forgotPassword(data: { email: string }): Promise<void> {
		const response = await this.post({ url: 'user/forgot-password', data });

		return response.data;
	}
}

const authService = new AuthService();

export default authService;

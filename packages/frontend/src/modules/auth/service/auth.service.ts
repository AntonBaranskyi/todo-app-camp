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

		return response.data;
	}

	async signUpUser(data: IUserLogin): Promise<IUser> {
		const response = await this.post({
			url: 'user/register',
			data,
		});

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

		return response.data;
	}

	async forgotPassword(data: { email: string }): Promise<void> {
		const response = await this.post({ url: 'user/forgot-password', data });

		return response.data;
	}

	async checkAuth(): Promise<void> {
		const response = await this.get({ url: 'user/check-auth' });

		return response.data;
	}
}

const authService = new AuthService();

export default authService;

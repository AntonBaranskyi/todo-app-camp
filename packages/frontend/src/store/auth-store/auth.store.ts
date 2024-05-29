import { create } from 'zustand';
import { IAuthState, IUserLogin } from './auth.store.types';
import authService from '~modules/auth/service/auth.service';
import { toaster } from '~shared/components/toast/toast.component';

export const useAuthStore = create<IAuthState>((set) => ({
	isAuth: false,

	user: null,

	signUpOneUser: async (data: IUserLogin): Promise<void> => {
		try {
			const user = await authService.signUpUser(data);

			localStorage.setItem('token', user.token);

			toaster.show({ message: 'Succesfully registred' });

			set({ user });
		} catch (error) {
			toaster.show({ message: 'Failed to sign up. Please try again.' });
		}
	},

	loginOneUser: async (data: IUserLogin): Promise<void> => {
		try {
			const user = await authService.loginUser(data);
			localStorage.setItem('token', user.token);
			set({ user, isAuth: true });

			toaster.show({ message: 'Succesfully logged in' });
		} catch (error) {
			toaster.show({ message: 'Failed to log in. Please try again.' });
		}
	},

	logoutUser: (): void => {
		localStorage.removeItem('token');

		set({ isAuth: false });
		set({ user: null });
	},

	verifyUser: async (token: string): Promise<void> => {
		try {
			await authService.verificateUser(token);

			set({ isAuth: true });

			toaster.show({ message: 'User Verificate!!' });
		} catch (error) {
			toaster.show({ message: 'User Verification failed' });
		}
	},

	updatePassword: async (password: string): Promise<void> => {
		try {
			await authService.changePassword({ password });

			toaster.show({ message: 'Password updated!!' });
		} catch (error) {
			toaster.show({ message: 'User password updation failed' });
		}
	},
}));

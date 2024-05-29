export interface IAuthState {
	isAuth: boolean;

	user: IUser;

	signUpOneUser: (data: IUserLogin) => void;
	loginOneUser: (data: IUserLogin) => void;
	logoutUser: () => void;
	verifyUser: (token: string) => void;
	updatePassword: (password: string) => void;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUser {
	id: number;
	email: string;
	password: string;
	resetLink: string;
	token: string;
	isVerified: string;
}

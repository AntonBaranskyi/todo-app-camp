export interface IUser {
	id: number;
	email: string;
	password: string;
	resetLink: string;
	token: string;
	isVerified: boolean;
}

export interface IRegister extends Pick<IUser, 'email' | 'password'> {}

export interface IUpdatePassword extends Pick<IUser, 'password' | 'token'> {}

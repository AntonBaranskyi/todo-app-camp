import { prisma } from '@/app';
import { IRegister, IUser } from '@/types/user.type';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UserServise {
	async registerOne({ email, password }: IRegister): Promise<IUser> {
		const newUser = (await prisma.user.create({
			data: { email, password },
		})) as IUser;

		return newUser;
	}

	async hashPassword(password: string): Promise<string> {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		return hash;
	}

	async generateToken(objToGenerate: object): Promise<string> {
		const token = jwt.sign(
			objToGenerate,
			process.env.TOKEN_SECRET as string,
			{ expiresIn: '30d' },
		);

		return token;
	}

	async verifyToken(token: string): Promise<string | jwt.JwtPayload> {
		return jwt.verify(token, process.env.TOKEN_SECRET as string);
	}

	async updateOneUser({
		id,
		data,
	}: {
		id: number;
		data: IUser;
	}): Promise<IUser> {
		const updatedUser = (await prisma.user.update({
			where: { id },
			data,
		})) as IUser;

		return updatedUser;
	}

	async findOneUser<K extends keyof IUser>(
		data: Pick<IUser, K>,
	): Promise<IUser> {
		const user = (await prisma.user.findFirst({
			where: data as IUser,
		})) as IUser;

		return user;
	}

	async checkPassword({
		password,
		hash,
	}: {
		password: string;
		hash: string;
	}): Promise<boolean> {
		const isPasswordCorrect = await bcrypt.compare(password, hash);

		return isPasswordCorrect ? true : false;
	}
}

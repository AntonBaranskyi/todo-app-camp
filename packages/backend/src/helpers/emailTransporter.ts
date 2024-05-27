import { EMAIL } from '@/types/emailEnum';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	host: 'smtp.ukr.net',
	port: 2525,
	secure: true,

	tls: {
		ciphers: 'SSLv3',
		rejectUnauthorized: false,
	},

	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

const emailSendOption = {
	vefification: {
		subject: 'Confirm your new account',
		html: (token: string): string => `
		<h3>Please click a link below to confirm your registation</h3>
		<p>${process.env.CLIENT_URL}/verificate/${token}</p>`,
	},

	forgot_password: {
		subject: 'Reset password. Anton Baranskyi web-site',
		html: (token: string): string => `
		<h3>Please click a link below to reset your password</h3>
		<p>${process.env.CLIENT_URL}/auth/reset-password/${token}</p>`,
	},
};

export const sendEmail = ({
	email,
	type,
	token,
}: {
	email: string;
	type: EMAIL;
	token: string;
}) => {
	return transporter.sendMail({
		from: process.env.MAIL_USER,
		to: email,
		subject: emailSendOption[type].subject,
		html: emailSendOption[type].html(token),
	});
};

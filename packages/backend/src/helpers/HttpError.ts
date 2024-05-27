import { IResponseError } from '@/types/error.types';

const HttpError = (status: number, message: string): IResponseError => {
	const error: IResponseError = new Error(message);

	error.status = status;

	return error;
};

export default HttpError;

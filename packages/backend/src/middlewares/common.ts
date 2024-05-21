import { MODELS } from '@/types/models.enum';
import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export const validateRequest = (validations: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		for (const validation of validations) {
			await validation.run(req);
		}

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const errorMessages = errors.array().map((err) => err.msg);
			return res.status(400).json({
				error: `Validation error: ${errorMessages[0]}`,
			});
		}

		next();
	};
};

export const isExist = (model: MODELS) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;

			const instance = await prisma[model].findUnique({
				where: { id: Number(id) },
			});

			if (!instance) {
				return res
					.status(404)
					.json({ error: `Instance with id ${id} not found` });
			}

			next();
		} catch (error) {
			next(error);
		}
	};
};

export const tryCatch = (
	fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) => {
	return (req: Request, res: Response, next: NextFunction): void => {
		fn(req, res, next).catch(next);
	};
};

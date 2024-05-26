import UserServise from '@/services/user.service';
import { Request, Response } from 'express';

export class UserController {
	constructor(private userServise: UserServise) {}

	async registerUser(req: Request, resp: Response): Promise<void> {
        
    }
}

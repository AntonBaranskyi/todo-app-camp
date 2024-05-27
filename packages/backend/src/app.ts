import express, { Express } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';

import AppRouter from './routes';
import { PrismaClient } from '@prisma/client';
import passport from './middlewares/auth.middleware';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
export const prisma = new PrismaClient();

router.init();

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});

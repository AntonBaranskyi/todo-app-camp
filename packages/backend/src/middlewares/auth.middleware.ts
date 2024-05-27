import {
	Strategy as JwtStrategy,
	ExtractJwt,
	StrategyOptions,
} from 'passport-jwt';
import passport from 'passport';
import { prisma } from '@/app';

const opts: StrategyOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.TOKEN_SECRET as string,
};

passport.use(
	new JwtStrategy(opts, async (jwt_payload, done) => {
		try {
			console.log(jwt_payload);

			const user = await prisma.user.findUnique({
				where: { id: jwt_payload.id },
			});
			if (user) {
				return done(null, user);
			}
			return done(null, false);
		} catch (error) {
			return done(error, false);
		}
	}),
);

export default passport;

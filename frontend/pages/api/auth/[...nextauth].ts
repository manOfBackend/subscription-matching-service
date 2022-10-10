import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import jwt from 'jsonwebtoken';

export default NextAuth({
	session: {
		strategy: 'jwt',
	},
	providers: [
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID,
			clientSecret: process.env.KAKAO_CLIENT_SECRET,
		}),
	],
	jwt: {
		encode: async ({ secret, token }) => {
			if (token && token.accessToken) {
				token.accessToken = undefined;
			}
			if (token && token.refreshToken) {
				token.refreshToken = undefined;
			}
			return jwt.sign(token as any, secret, { algorithm: 'HS256' });
		},
		decode: async ({ secret, token }) => {
			return jwt.verify(token as string, secret, {
				algorithms: ['HS256'],
			}) as any;
		},
	},
	pages: {
		signIn: '/',
	},
	callbacks: {
		async jwt({ token, user, account, profile, isNewUser }) {
			if (user) {
				token.id = user.id;
			}
			if (account) {
				token.accessToken = account.access_token;
				token.refreshToken = account.refresh_token;
			}

			return token;
		},
		async session({ session, token }) {
			return session;
		},
	},
});

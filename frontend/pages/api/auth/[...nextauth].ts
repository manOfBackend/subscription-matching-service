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
	pages: {
		signIn: '/signin',
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

import jwt from 'jsonwebtoken';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { apiInstance } from '../../../utils/axios';

export default NextAuth({
	jwt: {
		maxAge: 60 * 60,
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
		async jwt({ token, user, account }) {
			const secret = process.env.NEXTAUTH_SECRET;
			if (secret && user) {
				const signed = jwt.sign(JSON.stringify(token, null, 2), secret);
				try {
					await apiInstance.post(
						'/api/v1/login/kakao',
						{ email: user.email, kakaoId: user.id },
						{
							headers: { Authorization: `${signed}` },
						},
					);
					token.id = user.id;
					token.accessToken = account?.access_token;
					token.refreshToken = account?.refresh_token;
				} catch (e) {
					console.log('실패', token, secret, user.email, user.id);
				}
			}
			return token;
		},
		async session({ session, token }) {
			if (token?.id === null) {
				session.expires = '';
			}
			return session;
		},
	},
});

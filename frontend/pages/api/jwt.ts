import { getToken } from 'next-auth/jwt';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const secret = process.env.NEXTAUTH_SECRET;
	const token = await getToken({ req, secret, raw: true });

	if (token && secret) {
		res.send(token);
	} else {
		res.status(401);
	}
	res.end();
}

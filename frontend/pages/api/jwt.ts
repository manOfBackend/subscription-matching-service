import { getToken } from 'next-auth/jwt';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const token = await getToken({ req });
	const secret = process.env.NEXTAUTH_SECRET;
	if (token && secret) {
		res.send(jwt.sign(JSON.stringify(token, null, 2), secret));
	} else {
		res.status(401);
	}
	res.end();
}

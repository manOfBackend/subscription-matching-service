import { getToken } from 'next-auth/jwt';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const secret = process.env.NEXTAUTH_SECRET;
	const token = await getToken({ req });
	if (token && secret) {
		const signed = jwt.sign(JSON.stringify(token, null, 2), secret);
		res.send(signed);
	} else {
		res.status(401);
	}
	res.end();
}

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
): void {
	console.log({ req, res })
	return res.status(200).json({
		body: req.body,
		query: req.query,
	})
}

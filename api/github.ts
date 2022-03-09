import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(
	req: VercelRequest,
	res: VercelResponse
): VercelResponse {
	// eslint-disable-next-line functional/no-expression-statement
	console.log('req.body.action', req.body.action)
	return res.status(200).json(req.body)
}

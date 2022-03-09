import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(
	req: VercelRequest,
	res: VercelResponse
): VercelResponse {
	// eslint-disable-next-line functional/no-expression-statement
	console.log({ 'req.body': req.body })
	return res.status(200).json(req.body)
}

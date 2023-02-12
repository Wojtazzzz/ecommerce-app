import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  readonly name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(404);
}

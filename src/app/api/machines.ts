import type { NextApiRequest, NextApiResponse } from 'next';
import { Machine } from '../Type'; // Machine型をインポート

const machines: Machine[] = [
    { ipAdr: '192.168.0.100' },
    { ipAdr: '192.168.0.101' },
    { ipAdr: '192.168.0.102' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Machine[]>) {
  res.status(200).json(machines);
}
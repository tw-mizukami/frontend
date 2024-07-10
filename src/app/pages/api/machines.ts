import type { NextApiRequest, NextApiResponse } from 'next';
import { Machine } from '../../Type'; // Machine型をインポート

const machines: Machine[] = [
    { ipAdr: '192.168.0.100', speed:'15000', goodNum:'10000000', NgNum:'1500' },
    { ipAdr: '192.168.0.101', speed:'12000', goodNum:'15000000', NgNum:'1000' },
    { ipAdr: '192.168.0.102', speed:'13000', goodNum:'18000000', NgNum:'6000' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Machine[]>) {
  console.log('API Request received'); // ログ出力
  res.status(200).json(machines);
}
'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from '../app/components/Card';
import { Machine } from '../app/Type'; // Machine型をインポート

const Home: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([
    { ipAdr: '192.168.0.100', speed:'15000', goodNum:'10000000', NgNum:'1500' },
    { ipAdr: '192.168.0.101', speed:'12000', goodNum:'15000000', NgNum:'1000' },
    { ipAdr: '192.168.0.102', speed:'13000', goodNum:'18000000', NgNum:'6000' },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const MachinesInfo = 'http://localhost:3000/src/app/pages/api/machines';

// 404エラー出る
  // useEffect(() => {
  //   const fetchMachines = async () => {
  //     try {
  //       // 将来的にはバックエンド側から装置の情報をもらう。
  //       const response = await axios.get(MachinesInfo);
  //       setMachines(response.data);
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         // Axiosエラーの場合の処理
  //         setError(`データの取得中にエラーが発生しました: ${error.message}`);
  //       } else {
  //         // その他のエラーの場合の処理
  //         setError('データの取得中に予期しないエラーが発生しました。');
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMachines();
  // }, []);

  // if (loading) {
  //   return <div>ロード中...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <main>
      <h1>装置一覧</h1>
      <br />
      <ul>
        {machines.map((machine, index) => (
          <Card key={index} machineInfo={machine} />
        ))}
      </ul>
    </main>
  )
}

export default Home;
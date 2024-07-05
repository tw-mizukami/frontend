'use client';

import React, { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Machine } from '../app/Type'; // Machine型をインポート
import axios from 'axios';

const Home: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        // 将来的にはバックエンド側から装置の情報をもらう。
        const response = await axios.get('./api/machines');
        setMachines(response.data);
      } catch (error) {
        setError('データの取得中にエラーが発生しました。');
      } finally {
        setLoading(false);
      }
    };

    fetchMachines();
  }, []);

  if (loading) {
    return <div>ロード中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
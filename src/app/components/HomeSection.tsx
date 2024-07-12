'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Machine } from '../Type'; // Machine型をインポート

export const HomeSection: React.FC = () => {

  // 取得した装置データは、グローバルに持っていた方がいい？それともここ？
  // 一度ソフトを落として再起動したときに、登録済みのデータの再取得処理をする必要はある。が今後対応。
  const [machines, setMachines] = useState<Machine[]>([
    { ipAdr: '192.168.0.100', speed: '15000', goodNum: '10000000', NgNum: '1500' },
    { ipAdr: '192.168.0.101', speed: '12000', goodNum: '15000000', NgNum: '1000' },
    { ipAdr: '192.168.0.102', speed: '13000', goodNum: '18000000', NgNum: '6000' },
  ]);

  // 登録解除
  const CancelofRegisteredClick = (index: number) => {
    setMachines(machines.filter((_, i) => i !== index));
  }

  // 登録
  const RegisteredClick = (machineInfo : Machine) => {
    setMachines([...machines, machineInfo]);
  }

 useEffect(() => {
  const init = async () => {
    const response = await   fetch("http://127.0.0.1:5000/machines");
    const json = await response.json();
    console.log(json);
  }

  init();
 },[])


  // 将来的にはApp Routerで値をもらう。
  // useEffect(() => {
  //   const fetchMachines = async () => {
  //     try {
  //       const response = await fetch("/machineInfo", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ machine: machines }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Response is not OK");
  //       }

  //       const data = await response.json();

  //     } catch (error) {
  //     }
  //   };

  //   fetchMachines();
  // }, []);

  return (
    <main>
      <h1>装置一覧</h1>
      <br />
      <ul>
        {machines.map((machine, index) => (
          <Card key={index} machineInfo={machine} isEnableDeleteButton={true} isEnableDetailButton={true} deleteClick={() => CancelofRegisteredClick(index)} />
        ))}
      </ul>
    </main>
  )
}

'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { MachineInfoProvider, MachineInfoContext } from '../../Providers/MachineInfoProvider'
import { MachineInfoType } from '../../app/MachineInfoType';


export const HomeSection: React.FC<{ response: any }> = ({ response }) => {
  const { machineInfo, setMachineInfo } = useContext(MachineInfoContext);

  // 登録解除
  // 1クッションおいて、はい選択で解除させるかな
  const CancelofRegisteredClick = (index: number) => {
    const result = window.confirm("本当に解除してもよろしいでしょうか？");
    if (result) {
      setMachineInfo(machineInfo.filter((_, i) => i !== index));
    }
  }

  //Test用 装置情報をBackend側に送信して、そのままそのデータをもらう。
  const SendButtonClick = async () => {
    const data: MachineInfoType[] = [
      {
        ip: "192.168.0.10",
        speed: "1000",
        good_num: "2000",
        ng_num: "3000",

      },
      {
        ip: "192.168.0.11",
        speed: "1000",
        good_num: "2000",
        ng_num: "3000",

      },
      {
        ip: "192.168.0.12",
        speed: "1000",
        good_num: "2000",
        ng_num: "3000",

      }
    ];

    try {
      const res = await fetch('http://127.0.0.1:5000/machineInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await res.json();
      setMachineInfo(responseData);
    } catch (error) {
    }
  };



  return (
    <main>
      <div className="space-x-4">
        <button onClick={SendButtonClick} type="button" className="bg-blue-500 text-white hover:text-gray-600 text-lg rounded-lg">
          Send
        </button>
        <button onClick={SendButtonClick} type="button" className="bg-red-500 text-white hover:text-gray-600 text-lg rounded-lg">
          Rest
        </button>

      </div>

      <h1 className='mt-5'>装置一覧</h1>
      <h1>{machineInfo.length > 0 ? "" : "Loading..."}</h1>
      <br />
      <ul>
        {machineInfo.map((machineInfo, index) => (
          <Card key={index} machineInfo={machineInfo} isEnableDeleteButton={true} isEnableDetailButton={true} deleteClick={() => CancelofRegisteredClick(index)} />
        ))}
      </ul>
    </main>
  )
}

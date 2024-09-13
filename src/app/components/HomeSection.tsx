'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { MachineInfoProvider, MachineInfoContext } from '../../Providers/MachineInfoProvider'
import { machineInfoAction } from '../actions/machineInfoAction';


export const HomeSection = () => {
  const { machineInfo, setMachineInfo } = useContext(MachineInfoContext);

  // 登録解除
  // 1クッションおいて、はい選択で解除させるかな
  const CancelofRegisteredClick = (index: number) => {
    const result = window.confirm("本当に解除してもよろしいでしょうか？");
    if (result) {
      setMachineInfo(machineInfo.filter((_, i) => i !== index));
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await machineInfoAction();
        setMachineInfo(data);
      } catch (error) {
        console.error("Error fetching machine info:", error);
      }
    };

    fetchData();
  }, []);

  // 登録済みの装置情報を取得して表示する。
  return (
    <div>
      <h1 className='mt-5'>装置一覧</h1>
      <h1>{machineInfo.length > 0 ? "" : "Loading..."}</h1>
      <br />
      <ul>
        {machineInfo.map((machineInfo, index) => (
          <Card key={index} machineInfo={machineInfo} isEnableDeleteButton={true} isEnableDetailButton={true} deleteClick={() => CancelofRegisteredClick(index)} />
        ))}
      </ul>
    </div>
  )
}

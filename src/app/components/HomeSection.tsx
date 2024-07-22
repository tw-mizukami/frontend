'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { MachineInfoProvider, MachineInfoContext } from '../../Providers/MachineInfoProvider'
import { MachineInfoType } from '../../app/MachineInfoType';


export const HomeSection: React.FC<{ response: any }> = ({ response }) => {
  const { machineInfo, setMachineInfo } = useContext(MachineInfoContext);

  useEffect(() => {

    console.log(response);

    const fetchData = async () => {
      if (response) {
        const newMachineInfo: MachineInfoType[] = Object.keys(response).map(key => {
          const machineData = response[key];
          return {
            ipAdr: machineData[0],
            speed: machineData[1],
            goodNum: machineData[2],
            NgNum: machineData[3]
          };
        });

        setMachineInfo(newMachineInfo);
      }
    };

    fetchData();
  }, [response, setMachineInfo]); // responseが変更されたときに再実行する

  // 登録解除
  const CancelofRegisteredClick = (index: number) => {
    setMachineInfo(machineInfo.filter((_, i) => i !== index));
  }

  return (
    <main>
      <h1>装置一覧</h1>
      <h1>{machineInfo.length > 0 ? machineInfo[0].ipAdr : "Loading..."}</h1>
      <br />
      <ul>
        {machineInfo.map((machineInfo, index) => (
          <Card key={index} machineInfo={machineInfo} isEnableDeleteButton={true} isEnableDetailButton={true} deleteClick={() => CancelofRegisteredClick(index)} />
        ))}
      </ul>
    </main>
  )
}

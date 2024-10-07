'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import RunDataChart from '../components/RunDataChart';
import { lotInfoType } from '../lotInfoType';
import { useLotInfoAction } from '../hook/lotInfoAction';

export const DetailSection = () => {
    const [lotInfo, setLotInfo] = useState<lotInfoType | null>(null);
    
    const { swrlotInfo, error, isLoading } = useLotInfoAction();

    const lotEndPercentage = lotInfo?.productionPlan_num
        ? (Number(lotInfo.supply_num) / Number(lotInfo.productionPlan_num)) * 100
        : 0;
    const boxFullPercentage = lotInfo?.productionPlan_num
        ? (Number(lotInfo.box_num[0].num) / 3000) * 100
        : 0;

    useEffect(() => {
        if (swrlotInfo) {
            setLotInfo(swrlotInfo);
        }
    }, [swrlotInfo]);
   
    return (
        <div className="bg-white border dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 rounded-lg" style={{ width: '800px', height: '700px' }}>
            <div className="mt-8 mb-4 ml-4">
                <Link href="/" passHref
                    className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                    戻る
                </Link>
                {/* <button onClick={UpDateButtonClick} type="button" className="bg-yellow-500 text-white hover:text-gray-600 text-lg ml-10">
                    更新
                </button> */}
                <p>
                    {error ? 'No response' : ''}
                    {isLoading ? 'loading...' : ''}
                </p>

            </div>

            {/* <div className="flex flex-col gap-4"> */}
            <div className="ml-4 grid w-full grid-cols-3 grid-cols-[200px,150px,300px] gap-[1px] px-[10px]">
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>ロット開始時刻</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>{lotInfo?.start_time ? new Date(lotInfo.start_time).toLocaleString() : 'No start time'}</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300" />

                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>ロット終了予定時刻</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    {lotInfo?.start_time
                        ? new Date(new Date(lotInfo.start_time).getTime() + 3 * 60 * 60 * 1000).toLocaleString()
                        : 'No time'}
                </div >
                <div className="mt-2 h-[40px] border-b border-gray-300 justify-items-start">
                    <div className="inline-block py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
                        {lotEndPercentage.toFixed(1)}%
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                        <div className="h-full bg-blue-600" style={{ width: `${lotEndPercentage}%` }}></div>
                    </div>
                </div >

                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>BOX交換予定時刻</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    {lotInfo?.start_time
                        ? new Date(new Date(lotInfo.start_time).getTime() + 1 * 60 * 60 * 1000).toLocaleString()
                        : 'No time'}
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300 justify-items-start">
                    <div className="inline-block py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
                        {boxFullPercentage.toFixed(1)}%
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                        <div className="h-full bg-red-600" style={{ width: `${boxFullPercentage}%` }}></div>
                    </div>
                </div >
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                    <h2>カウンタ情報</h2>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }} className="ml-4">
                            <p>供給数</p>
                            <p>{lotInfo?.supply_num ? lotInfo.supply_num : '---------'}</p>
                        </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="ml-4">
                        <p>Box数</p>
                        <p>{lotInfo?.box_num[0]?.num ? lotInfo.box_num[0].num : '---------'}</p>
                    </div>
                 </div>
            </div >
            <div className=" ml-4 mt-8 mb-4 w-[700px] bg-sky-100 text-black p-2">
                <p>稼働グラフ</p>
            </div>
            <div className=" ml-8 mt-4 mb-4">
                <RunDataChart />
            </div>
        </div>
    )
}
'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import RunDataChart from '../components/RunDataChart';

export const DetailSection = () => {
    const time = "2024/1/1 11:11";
    const lotEndPercentage = 40;
    const boxFullPercentage = 80;

    // レイアウトで使うのは何がいい？グリッド？Flex box?　時刻を整列させて表示させたい
    // UIがダサい
    return (
        <div className="bg-white border dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 rounded-lg" style={{ width: '800px', height: '700px' }}>
            <div className="mt-8 mb-4 ml-4">
                <Link href="/" passHref
                    className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                    戻る
                </Link>
            </div>

            {/* <div className="flex flex-col gap-4"> */}
            <div className="ml-4 grid w-full grid-cols-3 grid-cols-[200px,150px,300px] gap-[1px] px-[10px]">
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>ロット開始時刻</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>{time}</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300" />

                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>ロット終了予定時刻</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>{time}</p>
                </div >
                <div className="mt-2 h-[40px] border-b border-gray-300 justify-items-start">
                    <div className="inline-block py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
                        {lotEndPercentage}%
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                        <div className="h-full bg-blue-600" style={{ width: `${lotEndPercentage}%` }}></div>
                    </div>
                </div >

                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>BOX交換予定時刻</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300">
                    <p>{time}</p>
                </div>
                <div className="mt-2 h-[40px] border-b border-gray-300 justify-items-start">
                    <div className="inline-block py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
                        {boxFullPercentage}%
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                        <div className="h-full bg-red-600" style={{ width: `${boxFullPercentage}%` }}></div>
                    </div>
                </div >
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
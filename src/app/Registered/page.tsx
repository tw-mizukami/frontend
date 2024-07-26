'use client';

import React, { useContext, useState } from 'react';
import { Card } from '../components/Card';
import { MachineInfoType } from '../MachineInfoType';
import { MachineInfoProvider, MachineInfoContext } from '../../Providers/MachineInfoProvider'

// 登録画面
const Registered = () => { // プロパティの正しい取り出し方
    const { machineInfo, setMachineInfo } = useContext(MachineInfoContext);
    const [DetecctMessage, SetDetecctMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const MachineInfo: MachineInfoType[] = [
        {
            ipAdr: '192.168.0.100',
            speed: '15000',
            goodNum: '10000000',
            NgNum: '1500'
        }
    ];

    const DetectClick = () => {
        // 入力に誤りがないか確認
        setIsLoading(true);
        // ここで、Backendに指定したIPアドレスの装置があるか問い合わせる。
        // あれば、装置情報を表示。なければ検出できませんでした。のメッセージを表示

        setTimeout(() => {
            SetDetecctMessage('検出完了');


            setIsLoading(false);
        }, 3000); // 3000ミリ秒 = 3秒
    };

    const RegisteredClick = () => {
        //setMachineInfo(MachineInfo);
        //SetDetecctMessage(null);
    };

    return (
        <div className="mt-10">
            <div className="mb-10">
                <label htmlFor="hs-search-box-with-loading-3" className="block text-sm font-medium mb-2 dark:text-white">Search</label>
                <div className="flex rounded-lg shadow-sm">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">192.168.0</span>
                    <input type="text" id="hs-search-box-with-loading-3" name="hs-search-box-with-loading-3" className="py-3 px-4 block w-[200px] border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Input search" />
                    <button type="button" onClick={DetectClick} className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        {isLoading &&
                            <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full">
                            </span>
                        }
                        {!isLoading &&
                            <span className="inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full">
                            </span>
                        }
                    </button>
                </div>
            </div>

            <div className="mt-5 mb-5">
                {DetecctMessage && <p>{DetecctMessage}</p>}
                {DetecctMessage && <Card machineInfo={MachineInfo[0]} isEnableDeleteButton={false} isEnableDetailButton={false} deleteClick={() => { }} />}
            </div>
            {DetecctMessage && <button type="button" className="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={RegisteredClick}>登録</button>}

        </div>
    );
};

export default Registered;

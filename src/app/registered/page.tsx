'use client';

import React, { useContext, useState } from 'react';
import { Card } from '../components/Card';
import { useFormState, useFormStatus } from "react-dom";
import { registeredAction } from "./action";
import { MachineInfoProvider, MachineInfoContext } from '../../Providers/MachineInfoProvider'
import { useRouter } from "next/navigation"

// 登録画面
const Registered = () => {
    const { machineInfo, setMachineInfo } = useContext(MachineInfoContext);
    const [state, action] = useFormState(registeredAction, {});
    const { pending } = useFormStatus();
    const router = useRouter();

    const UnRegisteredClick = () => {
        //Backend側の装置情報dbからこの装置情報を削除
        // stateクリアする？
    };

    // HOMEに戻り、HOMEに登録した装置情報が表示される
    const RegisteredClick = () => {
        setMachineInfo([state]);
        router.push("/");
    };

    return (
        <form action={action} className="mt-10">
            <div className="mb-10">
                <label htmlFor="hs-search-box-with-loading-3" className="block text-sm font-medium mb-2 dark:text-white">Search</label>
                <div className="flex rounded-lg shadow-sm">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">192.168.0</span>
                    <input name="ip" type="text" id="hs-search-box-with-loading-3" className="py-3 px-4 block w-[200px] border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Input search" />
                    <button disabled={pending} className="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        検索
                    </button>
                </div>
            </div>

            <div className="mt-5 mb-5">
                {state && Object.keys(state).length > 0 && <Card machineInfo={state} isEnableDeleteButton={false} isEnableDetailButton={false} deleteClick={() => { }} />}
            </div>

            {state && Object.keys(state).length > 0 && (
                <div className="mt-20">
                    <p>登録しますか？</p>
                    <div className="flex space-x-4">
                        <button type="button"
                            className="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={RegisteredClick}>
                            はい

                        </button>
                        <button type="button"
                            className="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={UnRegisteredClick}>
                            いいえ
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
};

export default Registered;

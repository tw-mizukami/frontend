'use client'; 

import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Machine } from '../Type'

// 登録画面
const Registered = () => {

    const [DetecctMessage, SetDetecctMessage] = useState<string | null>(null);
    const MachineInfo : Machine;

    const handleClick = () => {
        SetDetecctMessage('検出完了');
       
      };

    return (
        <div>
            <p>登録</p>
            <div>
                <label htmlFor ="hs-search-box-with-loading-3" className="block text-sm font-medium mb-2 dark:text-white">Search</label>
                <div className="flex rounded-lg shadow-sm">
                    <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">192.168.0</span>
                    <input type="text" id="hs-search-box-with-loading-3" name="hs-search-box-with-loading-3" className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-0 text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Input search"/>
                        <button type="button" onClick={handleClick} className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </span>
                        </button>
                </div>
            </div>

            {DetecctMessage && <p>{DetecctMessage}</p>}
            {DetecctMessage && <Card />}

        </div>
    );
};

export default Registered;
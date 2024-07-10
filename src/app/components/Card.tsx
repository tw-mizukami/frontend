import React from 'react'
import Link from "next/link";
import { Machine } from '../Type'

type CardProps = {
    machineInfo?: Machine;
};

export const Card: React.FC<CardProps> = ({ machineInfo }) => {
    if (!machineInfo) {
        return null; // machineInfoがundefinedの場合、何も表示しない
      }
      
    return (
        <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"></img>
            </div>
            <div className="flex flex-wrap">
                <div className="p-4 flex flex-col h-full sm:p-7 border border-blue-500 rounded-xl w-[300px]">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        IP Address: { machineInfo.ipAdr } 
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        速度: { machineInfo.speed } 
                    </p>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        良品数: { machineInfo.goodNum } 
                    </p>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        NG数: { machineInfo.NgNum } 
                    </p>
                </div>
            </div>
        </div>
    )
}
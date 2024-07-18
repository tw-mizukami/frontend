'use client';

import React, { ReactNode, createContext, useState } from "react";
import { MachineInfoType } from '../app/MachineInfoType'; // Machine型をインポート

// コンテキストの初期値を設定
export const MachineInfoContext = createContext<{
    machineInfo: MachineInfoType[];
    setMachineInfo: React.Dispatch<React.SetStateAction<MachineInfoType[]>>;
}>({
    machineInfo: [],
    setMachineInfo: () => { },
});

interface MachineInfoProviderProps {
    children: ReactNode;
}

// どのページからでも、装置情報を参照可能とする。
export const MachineInfoProvider: React.FC<MachineInfoProviderProps> = ({ children }) => {
    const [machineInfo, setMachineInfo] = useState<MachineInfoType[]>([]);
    return (
        <MachineInfoContext.Provider value={{ machineInfo, setMachineInfo }}>
            {children}
        </MachineInfoContext.Provider>
    )
};

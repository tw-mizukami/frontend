import React, { createContext, useState } from "react";
import { Machine } from '../app/Type'; // Machine型をインポート

// 将来的には装置情報はグローバルで持ち、各コンポーネントから参照しやすくする

export const MachineInforsContext = createContext({});

export const MachineInfoProvider = (props) => {
    const { children } = (props);
    const [machineInfos, setMachineInfos] = useState<Machine[]>([]);
    return (
        <MachineInforsContext.Provider value={{machineInfos}}>
            {children}
        </MachineInforsContext.Provider>
    )
};

// 使い方
/*
import { useContext } from "react"
inport { MachineInfors } from "このファイルのパス";

// 値の更新
const { setMachineInfos } = useContext(MachineInfors);
setMachineInfos({ ipAdr: "192.168.10.100"});

*/

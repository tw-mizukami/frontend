
import React, { useState } from 'react';
import useSWR from 'swr'
import { lotInfoType } from '../lotInfoType';

export const lotInfoAction = () => {
    const REFRESH_INTERVAL_SECONDES = 10;
    const Testlotinfo: lotInfoType = {
        start_time: "2024/12/12 12:12:12",
        productionPlan_num: 10000,
        supply_num: 1000,
        box_num: [
            {
                "num": 1000,
            },
            {
                "num": 2000,
            },
            {
                "num": 3000,
            }
        ]
    }

    const [updatedAt, setUpdatedAt] = useState(new Date());
    const { data: swrlotInfo, error, isLoading } = useSWR('/api/user', async () => {
        const response = await fetch("http://127.0.0.1:5000/lotInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify("192.168.0.10"),        // IPアドレスを渡して、LotInfoを取得
            body: JSON.stringify(Testlotinfo),           // Test
        })
    
        const swrlotInfo = await response.json();
        console.log(swrlotInfo);
        setUpdatedAt(new Date())
        return swrlotInfo;
    }, {
        refreshInterval: REFRESH_INTERVAL_SECONDES * 1000
    })

    return {
        updatedAt,
        swrlotInfo,
        error,
        isLoading
    }
}

// #SWR
// import { useState } from "react";
// import useSWR from 'swr'

// const REFRESH_INTERVAL_SECONDES = 60;

// export const useMachineInfo = () => {
//     const [updatedAt, setUpdatedAt] = useState(new Date());
//     const { data: machineInfo, error, isLoading } = useSWR('/api/user', async () => {
//         const response = await fetch('/api/machineinfo')
//         const data = await response.json()
//         setUpdatedAt(new Date())
//         return data;
//     }, {
//         refreshInterval: REFRESH_INTERVAL_SECONDES * 1000
//     })

//     return {
//         updatedAt,
//         machineInfo
//     }
// }
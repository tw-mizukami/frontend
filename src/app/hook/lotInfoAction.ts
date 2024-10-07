
import React, { useState } from 'react';
import useSWR from 'swr'
import { lotInfoType } from '../lotInfoType';

export const useLotInfoAction = () => {
    const REFRESH_INTERVAL_SECONDES = 10;
    
    const [updatedAt, setUpdatedAt] = useState(new Date());
    const { data: swrlotInfo, error, isLoading } = useSWR('/api/user', async () => {
        const Baselotinfo: lotInfoType = {
            start_time: new Date().toISOString(),
            productionPlan_num: 10000,
            supply_num: 1000,
            box_num: [
                {
                    "num": 2000,
                },
                {
                    "num": 3000,
                },
                {
                    "num": 4000,
                }
            ]
        }    

        const response = await fetch("http://127.0.0.1:5000/lotInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify("192.168.0.10"),        // IPアドレスを渡して、LotInfoを取得
            body: JSON.stringify(Baselotinfo),           // Test
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
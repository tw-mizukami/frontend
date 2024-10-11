"use server"

import { TestmachineInfo } from '@/consts/consts';
import { getApiurl } from '@/libs/urls';

export const machineInfoAction = async () => {

    const response = await fetch(getApiurl("/machineInfo"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(TestmachineInfo),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    return json
}

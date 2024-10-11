"use server"

import { getApiurl } from "@/libs/urls";

export const deleteMachineInfoAction = async () => {

    const response = await fetch(getApiurl("/machineInfo"), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(TestmachineInfo),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    return json
}

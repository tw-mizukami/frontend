"use server"

export const deleteMachineInfoAction = async () => {

    const response = await fetch("http://127.0.0.1:5000/machineInfo", {
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

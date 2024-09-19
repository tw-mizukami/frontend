"use server";

import { revalidatePath } from "next/cache"
import z from "zod"
import { MachineInfoType } from "../MachineInfoType"

const registeredSchema = z.object({
    ip: z.string().regex(/^\d+(\.\d+)?$/, "Invalid number"),
});

export async function registeredAction(prevstate: any, formData: FormData) {
    const validatedFileds = registeredSchema.safeParse({
        ip: formData.get("ip"),
    })

    if (!validatedFileds.success) {
        const errors = validatedFileds.error.flatten().fieldErrors;
        console.log(errors);

        return {
            errors
        }
    }

    // test
    const { ip } = validatedFileds.data;
    const machineInfo: MachineInfoType = {
        ip: `192.168.0.${ip}`,
        speed: 1000,
        good_num: 2000,
        ng_num: 3000,
    }

    console.log("Sending data:", machineInfo);

    const response = await fetch("http://127.0.0.1:5000/machineInfo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(machineInfo),
    })

    const json = (await response.json());

    // 正常
    revalidatePath("/");

    //redirect("/");

    return json
}
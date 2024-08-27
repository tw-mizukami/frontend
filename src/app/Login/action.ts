"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
import z from "zod"

const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export async function loginAction(prevState: any, formData: FormData) {
    const validatedFileds = loginSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
    })

    if (!validatedFileds.success) {
        const errors = validatedFileds.error.flatten().fieldErrors;
        console.log(errors);

        return {
            errors
        }
    }

    const { username, password } = validatedFileds.data;

    // Auth.js

    const response = await fetch("http://127.0.0.1:5000/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })

    const json = await response.json();

    // 正常
    revalidatePath("/");

    redirect("/");

    return {}
}
"use server";

import { signIn } from "@/libs/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
import z from "zod"

const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export async function loginAction(prevState: any, formData: FormData) {

    console.log("loginAction");

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
    console.log(username);

    // Auth.js
    await signIn("credentials", {
        username,
        password,
        redirectTo: "/",
    })

    // 正常
    revalidatePath("/");

    //redirect("/");
}
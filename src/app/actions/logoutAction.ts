"use server"

import { signOut } from "@/libs/auth"

export const logoutAction = async () => {
    await signOut();
}
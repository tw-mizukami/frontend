"use client"

import { signOut } from '@/libs/auth'
import React from 'react'
import { logoutAction } from '../actions/logoutAction';

export const LogoutButton = () => {
    return (
        <form action={logoutAction}>
            <button>LogoutButton</button>
        </form>
    );

};
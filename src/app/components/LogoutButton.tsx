"use client"

import { signOut } from '@/libs/auth'
import React from 'react'
import { logoutAction } from '../actions/logoutAction';

export const LogoutButton = () => {
    return (
        <form action={logoutAction}>
            <button className="px-8 px-4 bg-blue-500 text-white hover:text-gray-600 text-lg rounded-lg">Logout</button>
        </form>
    );

};
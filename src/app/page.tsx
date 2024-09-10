import React, { useEffect, useState } from 'react';
import { HomeSection } from './components/HomeSection';
import { redirect } from 'next/navigation';
import { auth } from '@/libs/auth';
import { LogoutButton } from './components/LogoutButton';

const Home: React.FC = async () => {

  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  let data = null;

  try {
    const response = await fetch("http://127.0.0.1:5000/machineInfo", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

  } catch (error) {
  };

  return (
    <>
      <HomeSection response={data} />
      <LogoutButton></LogoutButton>

      {session?.accessToken}
    </>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import { HomeSection } from './components/HomeSection';

const Home: React.FC = async () => {
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
    </>
  )
}

export default Home;
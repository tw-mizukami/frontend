import React, { useEffect, useState } from 'react';
import { HomeSection } from './components/HomeSection';

const Home: React.FC = async () => {
  const response = await fetch("http://127.0.0.1:5000/machineInfo");
  const data = await response.json();

  return (
    <>
      <HomeSection response={data} />
    </>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import { Card } from '../app/components/Card';
import { Machine } from '../app/Type'; // Machine型をインポート
import { HomeSection } from './components/HomeSection';

const Home: React.FC = async () => {
  const response = await fetch("http://127.0.0.1:5000/machines");
  const json = await response.json();

  return (
    <HomeSection />
  )
}

export default Home;
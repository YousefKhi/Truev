'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SplashScreen from '../components/SplashScreen';
import MainMenu from '../components/MainMenu';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    // If coming from a service page, skip splash
    if (searchParams.get('from') === 'service') {
      setShowSplash(false);
    }
  }, [searchParams]);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <MainMenu />
      )}
    </>
  );
}

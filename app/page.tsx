'use client';
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import MainMenu from '../components/MainMenu';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <MainMenu />
  );
} 
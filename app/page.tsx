'use client';
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import MainMenu from '../components/MainMenu';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Only show splash if not already shown in this session
    if (typeof window !== 'undefined') {
      const splashShown = sessionStorage.getItem('splashShown');
      if (splashShown) {
        setShowSplash(false);
        return;
      }
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('splashShown', 'true');
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <MainMenu />
  );
} 
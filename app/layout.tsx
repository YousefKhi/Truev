import React from 'react';
import './globals.css';

export const metadata = {
  title: 'True Vision Creative Designs',
  description: 'Creative agency for branding, digital marketing, events, multimedia, and medical communications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
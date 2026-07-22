import './globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Cross Poster | Social Cross-Posting & Live Streamer',
  description: 'Self-Hosted Multi-Tenant Cross-Posting & Multi-Platform Live Streaming System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

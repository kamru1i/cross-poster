import './globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

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
      <body style={{ backgroundColor: '#F0F2F5', minHeight: '100vh', margin: 0 }}>
        <Navbar />
        <div style={{ display: 'flex', minHeight: 'calc(100vh - 60px)', width: '100%' }}>
          <Sidebar />
          <main style={{ flex: 1, minWidth: 0 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

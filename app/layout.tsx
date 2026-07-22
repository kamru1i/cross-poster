import './globals.css';
import React from 'react';
import Link from 'next/link';
import { Globe, Video, Settings, UserCheck, Share2 } from 'lucide-react';

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
        <nav className="navbar">
          <Link href="/" className="brand-title">
            <Share2 size={24} color="#1877F2" />
            <span>Cross Poster</span>
          </Link>
          <div className="nav-links">
            <Link href="/" className="nav-item">
              <Globe size={16} style={{ marginRight: 6, display: 'inline' }} />
              Post Studio
            </Link>
            <Link href="/live" className="nav-item">
              <Video size={16} style={{ marginRight: 6, display: 'inline' }} />
              Live Studio
            </Link>
            <Link href="/settings" className="nav-item">
              <Settings size={16} style={{ marginRight: 6, display: 'inline' }} />
              BYOK Settings
            </Link>
            <Link href="/login" className="btn btn-primary" style={{ padding: '6px 14px', fontSize: 13 }}>
              <UserCheck size={16} />
              Login
            </Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

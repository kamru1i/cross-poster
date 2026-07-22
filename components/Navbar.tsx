'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Video, Settings, Share2, BookOpen } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* Left: Brand Logo */}
      <Link href="/" className="brand-title">
        <Share2 size={24} color="#1877F2" />
        <span>Cross Poster</span>
      </Link>

      {/* Center Navigation Links */}
      <div className="nav-links">
        <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
          <Globe size={16} style={{ marginRight: 6, display: 'inline' }} />
          Post Studio
        </Link>
        <Link href="/live" className={`nav-item ${pathname === '/live' ? 'active' : ''}`}>
          <Video size={16} style={{ marginRight: 6, display: 'inline' }} />
          Live Studio
        </Link>
        <Link href="/settings" className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}>
          <Settings size={16} style={{ marginRight: 6, display: 'inline' }} />
          BYOK Settings
        </Link>
      </div>

      {/* Right: Documentation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link 
          href="/docs" 
          className={`nav-item ${pathname === '/docs' ? 'active' : ''}`}
          style={{ color: '#1877F2', fontWeight: 600 }}
        >
          <BookOpen size={16} style={{ marginRight: 6, display: 'inline' }} />
          Documentation
        </Link>
      </div>
    </nav>
  );
}

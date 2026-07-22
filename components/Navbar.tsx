'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Video, Settings, UserCheck, Share2, BookOpen, LogOut } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  // Mock login state (In production, synced with NextAuth useSession)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If on login page or not logged in, hide protected studio links
  const isLoginPage = pathname === '/login';
  const showProtectedLinks = isLoggedIn && !isLoginPage;

  return (
    <nav className="navbar">
      {/* Left: Brand Logo */}
      <Link href={showProtectedLinks ? '/' : '/login'} className="brand-title">
        <Share2 size={24} color="#1877F2" />
        <span>Cross Poster</span>
      </Link>

      {/* Center Navigation Links (Hidden on Login Page / Unauthenticated) */}
      {showProtectedLinks ? (
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
      ) : (
        <div />
      )}

      {/* Right: Documentation & Auth Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Link 
          href="/docs" 
          className={`nav-item ${pathname === '/docs' ? 'active' : ''}`}
          style={{ color: '#1877F2', fontWeight: 600 }}
        >
          <BookOpen size={16} style={{ marginRight: 6, display: 'inline' }} />
          Documentation
        </Link>

        {isLoggedIn ? (
          <button 
            className="btn btn-secondary" 
            style={{ padding: '6px 14px', fontSize: 13 }}
            onClick={() => {
              setIsLoggedIn(false);
              window.location.href = '/login';
            }}
          >
            <LogOut size={16} />
            Logout
          </button>
        ) : (
          !isLoginPage && (
            <Link href="/login" className="btn btn-primary" style={{ padding: '6px 16px', fontSize: 13 }}>
              <UserCheck size={16} />
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Video, Settings, UserCheck, Share2, BookOpen, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Sync with auth status
    const authState = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(authState);
  }, [pathname]);

  const isLoginPage = pathname === '/login';
  const showProtectedLinks = isLoggedIn && !isLoginPage;

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      {/* Left: Brand Logo */}
      <Link href={isLoggedIn ? '/' : '/'} className="brand-title">
        <Share2 size={24} color="#1877F2" />
        <span>Cross Poster</span>
      </Link>

      {/* Center Navigation Links (Hidden if unauthenticated or on login page) */}
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
          <Link href="/account-settings" className={`nav-item ${pathname === '/account-settings' ? 'active' : ''}`}>
            <User size={16} style={{ marginRight: 6, display: 'inline' }} />
            Account & Security
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
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout
          </button>
        ) : (
          !isLoginPage && (
            <Link href="/" className="btn btn-primary" style={{ padding: '6px 16px', fontSize: 13 }}>
              <UserCheck size={16} />
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
}

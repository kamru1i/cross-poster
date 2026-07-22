'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Video, Settings } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: '240px',
      minWidth: '240px',
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid #E4E6EB',
      height: 'calc(100vh - 60px)',
      position: 'sticky',
      top: '60px',
      padding: '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      boxSizing: 'border-box',
      zIndex: 10
    }}>
      <div style={{ padding: '0 8px 12px 8px', fontSize: 12, fontWeight: 700, color: '#65676B', textTransform: 'uppercase', letterSpacing: 0.5 }}>
        Studio Navigation
      </div>

      <Link 
        href="/" 
        className={`nav-item ${pathname === '/' ? 'active' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          borderRadius: 8,
          textDecoration: 'none',
          color: pathname === '/' ? '#1877F2' : '#050505',
          backgroundColor: pathname === '/' ? '#E7F3FF' : 'transparent',
          fontWeight: pathname === '/' ? 700 : 500,
          fontSize: 14
        }}
      >
        <Globe size={18} color={pathname === '/' ? '#1877F2' : '#65676B'} />
        <span>Post Studio</span>
      </Link>

      <Link 
        href="/live" 
        className={`nav-item ${pathname === '/live' ? 'active' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          borderRadius: 8,
          textDecoration: 'none',
          color: pathname === '/live' ? '#1877F2' : '#050505',
          backgroundColor: pathname === '/live' ? '#E7F3FF' : 'transparent',
          fontWeight: pathname === '/live' ? 700 : 500,
          fontSize: 14
        }}
      >
        <Video size={18} color={pathname === '/live' ? '#1877F2' : '#65676B'} />
        <span>Live Studio</span>
      </Link>

      <Link 
        href="/settings" 
        className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 14px',
          borderRadius: 8,
          textDecoration: 'none',
          color: pathname === '/settings' ? '#1877F2' : '#050505',
          backgroundColor: pathname === '/settings' ? '#E7F3FF' : 'transparent',
          fontWeight: pathname === '/settings' ? 700 : 500,
          fontSize: 14
        }}
      >
        <Settings size={18} color={pathname === '/settings' ? '#1877F2' : '#65676B'} />
        <span>BYOK Settings</span>
      </Link>
    </aside>
  );
}

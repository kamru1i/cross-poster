'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { 
  Globe, 
  Video, 
  Settings, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  Play, 
  Key, 
  Calendar, 
  Radio, 
  BarChart3, 
  CheckCircle2 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSection = searchParams ? searchParams.get('section') || 'getting-started' : 'getting-started';

  const [isDocsExpanded, setIsDocsExpanded] = useState(pathname === '/docs');

  useEffect(() => {
    if (pathname === '/docs') {
      setIsDocsExpanded(true);
    }
  }, [pathname]);

  const docSubtabs = [
    { id: 'getting-started', label: '1. Quick Start & Overview', icon: BookOpen },
    { id: 'meta-setup', label: '2. Facebook & Instagram Setup', icon: CheckCircle2 },
    { id: 'youtube-setup', label: '3. YouTube Setup', icon: Play },
    { id: 'byok-setup', label: '4. BYOK API Keys Config', icon: Key },
    { id: 'post-scheduling', label: '5. Meta Suite Scheduling', icon: Calendar },
    { id: 'live-streaming', label: '6. Multi-Platform Live Studio', icon: Radio },
    { id: 'analytics-logs', label: '7. 30-Day Reach Analytics', icon: BarChart3 },
  ];

  return (
    <aside style={{
      width: '260px',
      minWidth: '260px',
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid #E4E6EB',
      height: 'calc(100vh - 60px)',
      position: 'sticky',
      top: '60px',
      padding: '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      boxSizing: 'border-box',
      zIndex: 10,
      overflowY: 'auto'
    }}>
      <div style={{ padding: '0 8px 8px 8px', fontSize: 12, fontWeight: 700, color: '#65676B', textTransform: 'uppercase', letterSpacing: 0.5 }}>
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

      {/* Documentation Main Section & Expandable Subtabs */}
      <div style={{ marginTop: 6 }}>
        <div
          onClick={() => setIsDocsExpanded(!isDocsExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: 8,
            cursor: 'pointer',
            color: pathname === '/docs' ? '#1877F2' : '#050505',
            backgroundColor: pathname === '/docs' ? '#E7F3FF' : 'transparent',
            fontWeight: pathname === '/docs' ? 700 : 500,
            fontSize: 14
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BookOpen size={18} color={pathname === '/docs' ? '#1877F2' : '#65676B'} />
            <span>Documentation</span>
          </div>
          {isDocsExpanded ? <ChevronDown size={16} color="#65676B" /> : <ChevronRight size={16} color="#65676B" />}
        </div>

        {/* Render Subtabs when expanded */}
        {isDocsExpanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6, paddingLeft: 14, borderLeft: '2px solid #E4E6EB', marginLeft: 16 }}>
            {docSubtabs.map(tab => {
              const Icon = tab.icon;
              const isSelectedTab = pathname === '/docs' && currentSection === tab.id;
              return (
                <Link
                  key={tab.id}
                  href={`/docs?section=${tab.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    borderRadius: 6,
                    textDecoration: 'none',
                    fontSize: 13,
                    color: isSelectedTab ? '#1877F2' : '#65676B',
                    backgroundColor: isSelectedTab ? '#E7F3FF' : 'transparent',
                    fontWeight: isSelectedTab ? 700 : 400
                  }}
                >
                  <Icon size={14} color={isSelectedTab ? '#1877F2' : '#65676B'} />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}

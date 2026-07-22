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
  CheckCircle2,
  PlusSquare,
  TrendingUp,
  Share2
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentDocSection = searchParams ? searchParams.get('section') || 'getting-started' : 'getting-started';
  const currentAnalyticsPlatform = searchParams ? searchParams.get('platform') || 'ALL' : 'ALL';

  const [isDocsExpanded, setIsDocsExpanded] = useState(pathname === '/docs');
  const [isAnalyticsExpanded, setIsAnalyticsExpanded] = useState(pathname === '/analytics');

  useEffect(() => {
    if (pathname === '/docs') {
      setIsDocsExpanded(true);
    }
    if (pathname === '/analytics') {
      setIsAnalyticsExpanded(true);
    }
  }, [pathname]);

  const docSubtabs = [
    { id: 'getting-started', label: '1. Quick Start & Overview', icon: BookOpen },
    { id: 'meta-setup', label: '2. Facebook & Instagram Setup', icon: CheckCircle2 },
    { id: 'youtube-setup', label: '3. YouTube Setup', icon: Play },
    { id: 'byok-setup', label: '4. API Setup Keys Config', icon: Key },
    { id: 'post-scheduling', label: '5. Meta Suite Scheduling', icon: Calendar },
    { id: 'live-streaming', label: '6. Multi-Platform Live Studio', icon: Radio },
    { id: 'analytics-logs', label: '7. 30-Day Reach Analytics', icon: BarChart3 },
  ];

  // Configured Platform Analytics Submenus
  const analyticsSubmenus = [
    { id: 'ALL', label: 'Overview (All Platforms)', color: '#1877F2' },
    { id: 'META', label: 'Meta (FB & IG)', color: '#1877F2' },
    { id: 'YOUTUBE', label: 'YouTube Studio', color: '#FF0000' },
    { id: 'X_TWITTER', label: 'X (Twitter)', color: '#000000' },
    { id: 'THREADS', label: 'Threads', color: '#000000' },
    { id: 'TIKTOK', label: 'TikTok', color: '#25F4EE' },
    { id: 'LINKEDIN', label: 'LinkedIn', color: '#0A66C2' },
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

      {/* 1. Create Post */}
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
        <PlusSquare size={18} color={pathname === '/' ? '#1877F2' : '#65676B'} />
        <span>Create Post</span>
      </Link>

      {/* 2. Create Live */}
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
        <span>Create Live</span>
      </Link>

      {/* 3. API Setup */}
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
        <Key size={18} color={pathname === '/settings' ? '#1877F2' : '#65676B'} />
        <span>API Setup</span>
      </Link>

      {/* 4. Analytics Main Section & Expandable Platform Submenus */}
      <div style={{ marginTop: 2 }}>
        <div
          onClick={() => setIsAnalyticsExpanded(!isAnalyticsExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 14px',
            borderRadius: 8,
            cursor: 'pointer',
            color: pathname === '/analytics' ? '#1877F2' : '#050505',
            backgroundColor: pathname === '/analytics' ? '#E7F3FF' : 'transparent',
            fontWeight: pathname === '/analytics' ? 700 : 500,
            fontSize: 14
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BarChart3 size={18} color={pathname === '/analytics' ? '#1877F2' : '#65676B'} />
            <span>Analytics</span>
          </div>
          {isAnalyticsExpanded ? <ChevronDown size={16} color="#65676B" /> : <ChevronRight size={16} color="#65676B" />}
        </div>

        {/* Render Analytics Platform Submenus when expanded */}
        {isAnalyticsExpanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6, paddingLeft: 14, borderLeft: '2px solid #E4E6EB', marginLeft: 16 }}>
            {analyticsSubmenus.map(tab => {
              const isSelectedTab = pathname === '/analytics' && currentAnalyticsPlatform.toUpperCase() === tab.id.toUpperCase();
              return (
                <Link
                  key={tab.id}
                  href={`/analytics?platform=${tab.id}`}
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
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: tab.color, display: 'inline-block' }} />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. Documentation Main Section & Expandable Subtabs */}
      <div style={{ marginTop: 2 }}>
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
              const isSelectedTab = pathname === '/docs' && currentDocSection === tab.id;
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

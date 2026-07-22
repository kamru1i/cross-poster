'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Key, 
  Send, 
  Radio, 
  BarChart3, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle,
  Play,
  Calendar,
  Tag,
  Check,
  Zap,
  Globe,
  Share2,
  Lock,
  Layers
} from 'lucide-react';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('getting-started');

  const menuItems = [
    { id: 'getting-started', title: '1. Quick Start & Overview', icon: BookOpen },
    { id: 'meta-setup', title: '2. Facebook & Instagram Setup', icon: CheckCircle2 },
    { id: 'youtube-setup', title: '3. YouTube Setup (Shorts & Videos)', icon: Play },
    { id: 'byok-setup', title: '4. BYOK API Keys Configuration', icon: Key },
    { id: 'post-scheduling', title: '5. Meta Suite Scheduling & Tags', icon: Calendar },
    { id: 'live-streaming', title: '6. Multi-Platform Live Streaming', icon: Radio },
    { id: 'analytics-logs', title: '7. 30-Day Analytics & Reach', icon: BarChart3 },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '24px 32px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28 }}>
      {/* Sidebar Documentation Menu */}
      <div className="card" style={{ height: 'fit-content', position: 'sticky', top: 80, padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid #E4E6EB' }}>
          <BookOpen size={22} color="#1877F2" />
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1877F2' }}>Documentation</h3>
            <span style={{ fontSize: 12, color: '#65676B' }}>Cross Poster Master Guide</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 16px',
                  borderRadius: 10,
                  border: 'none',
                  background: isActive ? '#E7F3FF' : 'transparent',
                  color: isActive ? '#1877F2' : '#050505',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 14,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 6px rgba(24, 119, 242, 0.15)' : 'none'
                }}
              >
                <Icon size={18} color={isActive ? '#1877F2' : '#65676B'} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Documentation Content Area */}
      <div className="card" style={{ minHeight: '650px', padding: 32 }}>
        {activeSection === 'getting-started' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <BookOpen size={28} color="#1877F2" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
                1. Quick Start & Application Overview
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
              Welcome to <strong>Cross Poster</strong>! This self-hosted, multi-tenant application allows you and your team to publish posts, schedule future content, and broadcast simultaneous live streams across <strong>Facebook, Instagram, YouTube, X (Twitter), Threads, TikTok, and LinkedIn</strong> with zero monthly subscription fees.
            </p>

            <div style={{ backgroundColor: '#E7F3FF', borderLeft: '4px solid #1877F2', padding: 20, borderRadius: 10, marginBottom: 24 }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1877F2', marginBottom: 10 }}>🚀 Core Application Features:</h4>
              <ul style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><strong>Multi-Partner Workspace Isolation</strong>: You and your partner log in independently to your own private account workspaces.</li>
                <li><strong>BYOK (Bring Your Own Keys)</strong>: Enter your own official free platform API keys directly in the UI.</li>
                <li><strong>Meta Suite Post Scheduling</strong>: Schedule future posts with AI-recommended peak audience active times.</li>
                <li><strong>Multi-Platform Live Streaming</strong>: Broadcast live streams simultaneously across Facebook Live, YouTube Live, and Custom RTMP destinations.</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'meta-setup' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <CheckCircle2 size={28} color="#1877F2" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
                2. Connecting Facebook Pages & Instagram Accounts
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 24 }}>
              Step-by-step instructions to connect your Facebook Pages, Profiles, and Instagram Business accounts.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ border: '1px solid #CED0D4', borderRadius: 10, padding: 20, background: '#FFFFFF' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1877F2', marginBottom: 8 }}>Step 1: Obtain Meta Developer Credentials</h3>
                <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.5 }}>
                  Go to <a href="https://developers.facebook.com/" target="_blank" rel="noreferrer" style={{ color: '#1877F2', fontWeight: 600 }}>developers.facebook.com</a>, click <strong>Create App</strong>, choose <strong>Business</strong>, and copy your <strong>Meta App ID</strong> and <strong>Meta App Secret</strong>.
                </p>
              </div>

              <div style={{ border: '1px solid #CED0D4', borderRadius: 10, padding: 20, background: '#FFFFFF' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1877F2', marginBottom: 8 }}>Step 2: Required Products & Scopes</h3>
                <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.5 }}>
                  Add <strong>Facebook Login for Business</strong>, <strong>Instagram Graph API</strong>, and request permissions: <code>pages_manage_posts</code>, <code>pages_read_engagement</code>, <code>instagram_content_publish</code>.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'youtube-setup' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Play size={28} color="#FF0000" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#FF0000' }}>
                3. Connecting YouTube Channels (Videos & Shorts)
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 24 }}>
              Enable 4K video uploads and YouTube Shorts cross-posting for your YouTube Channel.
            </p>

            <div style={{ border: '1px solid #CED0D4', borderRadius: 10, padding: 20, background: '#FFFFFF' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FF0000', marginBottom: 10 }}>Google Cloud Setup Steps</h3>
              <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li>Navigate to <a href="https://console.cloud.google.com/" target="_blank" rel="noreferrer" style={{ color: '#FF0000', fontWeight: 600 }}>Google Cloud Console</a>.</li>
                <li>Enable <strong>YouTube Data API v3</strong> and <strong>YouTube Live Streaming API</strong>.</li>
                <li>Create an <strong>OAuth 2.0 Client ID</strong> (Web Application).</li>
                <li>Copy the Client ID and Client Secret, then paste them in <strong>⚙️ BYOK Settings</strong> in Cross Poster.</li>
              </ol>
            </div>
          </div>
        )}

        {activeSection === 'byok-setup' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Key size={28} color="#1877F2" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
                4. BYOK (Bring Your Own Keys) Encryption Settings
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 24 }}>
              Cross Poster uses AES-256 encryption to store your API keys securely on the server without rate limit restrictions.
            </p>

            <div style={{ backgroundColor: '#F0F2F5', padding: 20, borderRadius: 10 }}>
              <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6 }}>
                Open <strong>⚙️ BYOK Settings</strong> from the top navbar header, enter your platform credentials, and click <strong>Save Encrypted Credentials</strong>. All keys are encrypted before storing to database.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'post-scheduling' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Calendar size={28} color="#1877F2" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
                5. Meta Suite Post Scheduling & Tags
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 24 }}>
              Schedule future posts and use AI-recommended peak audience active times.
            </p>

            <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>In <strong>Post Studio</strong>, click on the <strong>Schedule Post</strong> tab.</li>
              <li>Click <strong>⚡ Optimal Posting Time</strong> to auto-set peak follower engagement hours.</li>
              <li>Add hashtags (`#TechNews`) or account tags (`@PartnerBrand`) before scheduling.</li>
            </ol>
          </div>
        )}

        {activeSection === 'live-streaming' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Radio size={28} color="#FF0000" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#FF0000' }}>
                6. Multi-Platform Live Streaming Guide
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 24 }}>
              Broadcast live from your web camera or mobile app across Facebook Live, YouTube Live, and Custom RTMP destinations simultaneously.
            </p>

            <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>Go to <strong>Live Studio</strong> from the navbar header.</li>
              <li>Select your target live platforms (e.g. ✅ Facebook Live + ✅ YouTube Live).</li>
              <li>Enter a broadcast title and click <strong>Start Multi-Live Stream</strong>.</li>
            </ol>
          </div>
        )}

        {activeSection === 'analytics-logs' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <BarChart3 size={28} color="#1877F2" />
              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
                7. 30-Day Reach & Analytics Insights
              </h2>
            </div>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 24 }}>
              Track 30-day total reach, impressions, likes, and comments across all platforms.
            </p>

            <div style={{ backgroundColor: '#F0F2F5', padding: 20, borderRadius: 10 }}>
              <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6 }}>
                All published posts automatically sync performance stats via Graph APIs. View detailed breakdown under the <strong>30-Day Social Reach Insights</strong> card on the homepage.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

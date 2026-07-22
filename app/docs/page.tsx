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
  Tag
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
    <div style={{ maxWidth: 1200, margin: '30px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24 }}>
      {/* Sidebar Documentation Menu */}
      <div className="card" style={{ height: 'fit-content', position: 'sticky', top: 80, padding: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1877F2', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <BookOpen size={18} /> User Documentation
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
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
                  gap: 10,
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: 'none',
                  background: isActive ? '#E7F3FF' : 'transparent',
                  color: isActive ? '#1877F2' : '#65676B',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: 13,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Documentation Content Area */}
      <div className="card">
        {activeSection === 'getting-started' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2', marginBottom: 12 }}>
              1. Getting Started with Cross Poster
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Welcome to <strong>Cross Poster</strong>! This self-hosted application allows you to publish, schedule, and broadcast live streams across Facebook, Instagram, YouTube, X, Threads, TikTok, and LinkedIn with 100% free API quota.
            </p>

            <div style={{ backgroundColor: '#E7F3FF', borderLeft: '4px solid #1877F2', padding: 16, borderRadius: 8, marginBottom: 20 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1877F2', marginBottom: 6 }}>Key Workflow Steps:</h4>
              <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Log in using <strong>Facebook OAuth</strong>, <strong>Google OAuth</strong>, or <strong>Email & Password</strong>.</li>
                <li>Go to <strong>BYOK Settings</strong> to enter your free platform API credentials.</li>
                <li>Connect your target Facebook Pages, Instagram Accounts, and YouTube Channels.</li>
                <li>Use <strong>Post Studio</strong> or <strong>Live Studio</strong> to broadcast instantly or schedule for peak engagement hours.</li>
              </ol>
            </div>
          </div>
        )}

        {activeSection === 'meta-setup' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2', marginBottom: 12 }}>
              2. Connecting Facebook Pages & Instagram Accounts
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Learn how to connect your Facebook Pages, Facebook Profiles, and Instagram Business Accounts to Cross Poster.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ border: '1px solid #CED0D4', borderRadius: 8, padding: 16 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1877F2', marginBottom: 6 }}>Step 1: Obtain Meta Credentials</h3>
                <p style={{ fontSize: 14, color: '#050505' }}>
                  Go to <a href="https://developers.facebook.com/" target="_blank" rel="noreferrer" style={{ color: '#1877F2' }}>developers.facebook.com</a>, create a Business App, and copy your <strong>Meta App ID</strong> and <strong>Meta App Secret</strong>.
                </p>
              </div>

              <div style={{ border: '1px solid #CED0D4', borderRadius: 8, padding: 16 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1877F2', marginBottom: 6 }}>Step 2: Add Required Permissions</h3>
                <p style={{ fontSize: 14, color: '#050505' }}>
                  Ensure your app has access to <code>pages_manage_posts</code>, <code>pages_read_engagement</code>, <code>instagram_basic</code>, and <code>instagram_content_publish</code>.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'youtube-setup' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#FF0000', marginBottom: 12 }}>
              3. Connecting YouTube Channels (Videos & Shorts)
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Follow these steps to enable 4K video uploads and YouTube Shorts cross-posting.
            </p>

            <div style={{ border: '1px solid #CED0D4', borderRadius: 8, padding: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#FF0000', marginBottom: 6 }}>Google Cloud Setup</h3>
              <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noreferrer" style={{ color: '#FF0000' }}>Google Cloud Console</a>.</li>
                <li>Enable <strong>YouTube Data API v3</strong> and <strong>YouTube Live Streaming API</strong>.</li>
                <li>Create an <strong>OAuth 2.0 Client ID</strong> (Web Application).</li>
                <li>Enter the Client ID and Client Secret in Cross Poster's <strong>BYOK Settings</strong>.</li>
              </ol>
            </div>
          </div>
        )}

        {activeSection === 'byok-setup' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2', marginBottom: 12 }}>
              4. BYOK (Bring Your Own Keys) Encryption Settings
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Cross Poster uses AES-256 encryption to store your API keys securely on the server.
            </p>
            <div style={{ backgroundColor: '#F0F2F5', padding: 16, borderRadius: 8 }}>
              <p style={{ fontSize: 14, color: '#050505' }}>
                Navigate to <strong>⚙️ BYOK Settings</strong> from the top navbar, paste your credentials, and click <strong>Save Encrypted Credentials</strong>.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'post-scheduling' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2', marginBottom: 12 }}>
              5. Meta Suite Post Scheduling & Hashtags
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Learn how to schedule future posts and use AI-recommended best posting times.
            </p>
            <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>In <strong>Post Studio</strong>, switch to the <strong>Schedule Post</strong> tab.</li>
              <li>Click on <strong>⚡ Optimal Posting Time</strong> to auto-fill peak engagement hours.</li>
              <li>Add hashtags (`#TechNews`) or account tags (`@PartnerBrand`) before scheduling.</li>
            </ol>
          </div>
        )}

        {activeSection === 'live-streaming' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#FF0000', marginBottom: 12 }}>
              6. Multi-Platform Live Streaming Guide
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Broadcast live from your web camera or mobile app to Facebook Live, YouTube Live, and Custom RTMP targets simultaneously.
            </p>
            <ol style={{ paddingLeft: 20, fontSize: 14, color: '#050505', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>Open <strong>Live Studio</strong> from the top navbar.</li>
              <li>Select your target live platforms (e.g. ✅ Facebook Live + ✅ YouTube Live).</li>
              <li>Enter a stream title and click <strong>Start Multi-Live Stream</strong>.</li>
            </ol>
          </div>
        )}

        {activeSection === 'analytics-logs' && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2', marginBottom: 12 }}>
              7. 30-Day Reach & Analytics Insights
            </h2>
            <p style={{ color: '#65676B', fontSize: 15, marginBottom: 20 }}>
              Track 30-day total reach, impressions, likes, and comments across all platforms.
            </p>
            <div style={{ backgroundColor: '#F0F2F5', padding: 16, borderRadius: 8 }}>
              <p style={{ fontSize: 14, color: '#050505' }}>
                All published posts automatically sync performance stats via Graph APIs. View detailed breakdown under the <strong>30-Day Social Reach Insights</strong> card on the homepage.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

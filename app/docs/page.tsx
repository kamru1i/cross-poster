'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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

function DocumentationContent() {
  const searchParams = useSearchParams();
  const activeSection = searchParams ? searchParams.get('section') || 'getting-started' : 'getting-started';

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card">
        {/* Render Documentation Guide Content Based on Active Section */}
        {activeSection === 'getting-started' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Zap size={24} color="#1877F2" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1877F2' }}>1. Quick Start & Overview</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              Welcome to <strong>Cross Poster</strong>! This self-hosted system allows media managers, creators, and developers to publish posts, schedule content, track 30-day reach analytics, and broadcast simultaneous RTMP live streams across multiple social platforms from a single unified studio dashboard.
            </p>

            <div style={{ backgroundColor: '#F0F2F5', padding: 16, borderRadius: 8, marginBottom: 20 }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: '#050505', marginBottom: 10 }}>Core Workflow Overview</h4>
              <ul style={{ paddingLeft: 20, fontSize: 14, color: '#65676B', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><strong>BYOK API Configuration</strong>: Add your private Developer App credentials securely under <code>BYOK Settings</code>.</li>
                <li><strong>Post Creator Studio</strong>: Compose captions, add hashtags/mentions, upload media files, and publish or schedule content instantly.</li>
                <li><strong>Multi-Platform Live Studio</strong>: Set your stream title, select target channels, and broadcast RTMP live streams simultaneously.</li>
                <li><strong>30-Day Reach Analytics</strong>: Track aggregated audience reach, impressions, likes, and comments across all active channels.</li>
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'meta-setup' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <CheckCircle2 size={24} color="#1877F2" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1877F2' }}>2. Facebook Pages & Instagram Business Setup</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              Learn how to connect your Facebook Pages and Instagram Business accounts to enable cross-posting and analytics tracking.
            </p>
            <div style={{ backgroundColor: '#F0F2F5', padding: 16, borderRadius: 8, marginBottom: 16 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Step-by-Step Meta Developer Setup:</h4>
              <ol style={{ paddingLeft: 20, fontSize: 14, color: '#65676B', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Go to <a href="https://developers.facebook.com" target="_blank" rel="noreferrer" style={{ color: '#1877F2' }}>Meta Developer Portal</a> and create a Business App.</li>
                <li>Add the <strong>Webhooks</strong> and <strong>Facebook Graph API</strong> products.</li>
                <li>Grant <code>pages_manage_posts</code>, <code>instagram_basic</code>, and <code>pages_read_engagement</code> permissions.</li>
                <li>Copy your <strong>App ID</strong> and <strong>App Secret</strong> into Cross Poster <code>BYOK Settings</code>.</li>
              </ol>
            </div>
          </div>
        )}

        {activeSection === 'youtube-setup' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Play size={24} color="#FF0000" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#FF0000' }}>3. YouTube Studio & Shorts Setup</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              Configure your Google Cloud Project to publish YouTube Shorts, standard videos, and broadcast live streams.
            </p>
            <div style={{ backgroundColor: '#F0F2F5', padding: 16, borderRadius: 8 }}>
              <ol style={{ paddingLeft: 20, fontSize: 14, color: '#65676B', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <li>Visit <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" style={{ color: '#1877F2' }}>Google Cloud Console</a>.</li>
                <li>Enable the <strong>YouTube Data API v3</strong>.</li>
                <li>Configure OAuth 2.0 Client Credentials and copy Client ID & Secret to <code>BYOK Settings</code>.</li>
              </ol>
            </div>
          </div>
        )}

        {activeSection === 'byok-setup' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Key size={24} color="#1877F2" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1877F2' }}>4. Bring Your Own Key (BYOK) API Configuration</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              Cross Poster uses a BYOK architecture where your developer keys are stored with AES-256 client-side encryption.
            </p>
            <div style={{ backgroundColor: '#E7F3FF', border: '1px solid #1877F2', padding: 14, borderRadius: 8 }}>
              <span style={{ fontSize: 13, color: '#050505' }}>
                Select any platform (Meta, Google, X, Threads, TikTok, LinkedIn) from the BYOK Settings dropdown to add or update your credentials.
              </span>
            </div>
          </div>
        )}

        {activeSection === 'post-scheduling' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Calendar size={24} color="#1877F2" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1877F2' }}>5. Meta Suite Post Scheduling & Tags</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              Schedule future posts and leverage Meta Business Suite AI recommendations for optimal posting times.
            </p>
          </div>
        )}

        {activeSection === 'live-streaming' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Radio size={24} color="#FF0000" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#FF0000' }}>6. Multi-Platform Live Studio</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              Simultaneously broadcast RTMP live streams to Facebook Live, YouTube Live, Twitch, and LinkedIn Live.
            </p>
          </div>
        )}

        {activeSection === 'analytics-logs' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <BarChart3 size={24} color="#1877F2" />
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1877F2' }}>7. 30-Day Analytics & Reach Tracker</h2>
            </div>
            <p style={{ fontSize: 14, color: '#050505', lineHeight: 1.6, marginBottom: 16 }}>
              View aggregated 30-day reach, impressions, reactions, and comments across all your connected social accounts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DocumentationPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24, color: '#1877F2' }}>Loading documentation...</div>}>
      <DocumentationContent />
    </Suspense>
  );
}

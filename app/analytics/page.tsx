'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  Calendar,
  Filter,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { SocialPlatform } from '@/types/social';

interface PlatformMetric {
  platformId: string;
  name: string;
  brandColor: string;
  reach: number;
  impressions: number;
  likes: number;
  comments: number;
  shares: number;
  topPostTitle: string;
  topPostUrl: string;
}

function AnalyticsContent() {
  const searchParams = useSearchParams();
  const selectedPlatform = searchParams ? searchParams.get('platform') || 'ALL' : 'ALL';
  const [dateRange, setDateRange] = useState<'7DAYS' | '30DAYS' | '90DAYS'>('30DAYS');

  const platformMetrics: PlatformMetric[] = [
    {
      platformId: 'META',
      name: 'Meta (Facebook & Instagram)',
      brandColor: '#1877F2',
      reach: 36600,
      impressions: 48300,
      likes: 2730,
      comments: 372,
      shares: 254,
      topPostTitle: 'New AI Features Released for Tech Daily!',
      topPostUrl: 'https://facebook.com/post/published-1001',
    },
    {
      platformId: 'YOUTUBE',
      name: 'YouTube Channel & Shorts',
      brandColor: '#FF0000',
      reach: 52100,
      impressions: 89400,
      likes: 4120,
      comments: 640,
      shares: 890,
      topPostTitle: 'How We Built Cross Poster Studio in 24 Hours',
      topPostUrl: 'https://youtube.com/watch?v=demo123',
    },
    {
      platformId: 'X_TWITTER',
      name: 'X (Twitter)',
      brandColor: '#000000',
      reach: 18400,
      impressions: 24100,
      likes: 940,
      comments: 112,
      shares: 310,
      topPostTitle: 'Cross-posting & live streaming from one dashboard 🚀',
      topPostUrl: 'https://x.com/status/1003',
    },
    {
      platformId: 'THREADS',
      name: 'Threads',
      brandColor: '#000000',
      reach: 12900,
      impressions: 16500,
      likes: 680,
      comments: 89,
      shares: 145,
      topPostTitle: 'Which social media scheduling feature is your favorite?',
      topPostUrl: 'https://threads.net/post/1004',
    },
    {
      platformId: 'TIKTOK',
      name: 'TikTok',
      brandColor: '#25F4EE',
      reach: 84200,
      impressions: 112000,
      likes: 12400,
      comments: 1890,
      shares: 3200,
      topPostTitle: 'Behind the scenes of setting up multi-platform live streaming! #tech',
      topPostUrl: 'https://tiktok.com/@tech/video/1005',
    },
    {
      platformId: 'LINKEDIN',
      name: 'LinkedIn',
      brandColor: '#0A66C2',
      reach: 14800,
      impressions: 19200,
      likes: 810,
      comments: 94,
      shares: 118,
      topPostTitle: 'Optimizing developer workflow with self-hosted API keys.',
      topPostUrl: 'https://linkedin.com/posts/1006',
    },
  ];

  const filteredMetrics = selectedPlatform === 'ALL' 
    ? platformMetrics 
    : platformMetrics.filter(m => m.platformId.toUpperCase() === selectedPlatform.toUpperCase());

  // Combined Totals
  const totalReach = filteredMetrics.reduce((sum, m) => sum + m.reach, 0);
  const totalImpressions = filteredMetrics.reduce((sum, m) => sum + m.impressions, 0);
  const totalLikes = filteredMetrics.reduce((sum, m) => sum + m.likes, 0);
  const totalComments = filteredMetrics.reduce((sum, m) => sum + m.comments, 0);
  const totalShares = filteredMetrics.reduce((sum, m) => sum + m.shares, 0);

  const activePlatformInfo = platformMetrics.find(m => m.platformId === selectedPlatform);

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #E4E6EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <BarChart3 size={26} color="#1877F2" />
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2' }}>
                {activePlatformInfo ? `${activePlatformInfo.name} Analytics` : 'Multi-Platform Reach & Performance Analytics'}
              </h1>
              <p style={{ color: '#65676B', fontSize: 14 }}>Real-time aggregated engagement, reach, impressions, and top performing posts</p>
            </div>
          </div>

          {/* Date Filter */}
          <div style={{ display: 'flex', gap: 6, backgroundColor: '#F0F2F5', padding: 4, borderRadius: 8 }}>
            <button 
              className={`btn ${dateRange === '7DAYS' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: 12, padding: '6px 12px' }}
              onClick={() => setDateRange('7DAYS')}
            >
              7 Days
            </button>
            <button 
              className={`btn ${dateRange === '30DAYS' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: 12, padding: '6px 12px' }}
              onClick={() => setDateRange('30DAYS')}
            >
              30 Days
            </button>
            <button 
              className={`btn ${dateRange === '90DAYS' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: 12, padding: '6px 12px' }}
              onClick={() => setDateRange('90DAYS')}
            >
              90 Days
            </button>
          </div>
        </div>

        {/* 4 Summary Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
          <div style={{ background: '#F0F2F5', padding: 16, borderRadius: 10, borderLeft: '4px solid #1877F2' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: '#65676B', fontWeight: 600 }}>Total Audience Reach</span>
              <Users size={18} color="#1877F2" />
            </div>
            <strong style={{ fontSize: 22, color: '#050505' }}>{totalReach.toLocaleString()}</strong>
            <span style={{ fontSize: 12, color: '#34A853', display: 'block', marginTop: 4 }}>↑ 18.4% vs last period</span>
          </div>

          <div style={{ background: '#F0F2F5', padding: 16, borderRadius: 10, borderLeft: '4px solid #FF0000' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: '#65676B', fontWeight: 600 }}>Total Impressions</span>
              <Eye size={18} color="#FF0000" />
            </div>
            <strong style={{ fontSize: 22, color: '#050505' }}>{totalImpressions.toLocaleString()}</strong>
            <span style={{ fontSize: 12, color: '#34A853', display: 'block', marginTop: 4 }}>↑ 24.1% vs last period</span>
          </div>

          <div style={{ background: '#F0F2F5', padding: 16, borderRadius: 10, borderLeft: '4px solid #E4405F' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: '#65676B', fontWeight: 600 }}>Reactions & Likes</span>
              <ThumbsUp size={18} color="#E4405F" />
            </div>
            <strong style={{ fontSize: 22, color: '#050505' }}>{totalLikes.toLocaleString()}</strong>
            <span style={{ fontSize: 12, color: '#34A853', display: 'block', marginTop: 4 }}>↑ 14.8% vs last period</span>
          </div>

          <div style={{ background: '#F0F2F5', padding: 16, borderRadius: 10, borderLeft: '4px solid #0A66C2' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: '#65676B', fontWeight: 600 }}>Comments & Shares</span>
              <MessageSquare size={18} color="#0A66C2" />
            </div>
            <strong style={{ fontSize: 22, color: '#050505' }}>{(totalComments + totalShares).toLocaleString()}</strong>
            <span style={{ fontSize: 12, color: '#34A853', display: 'block', marginTop: 4 }}>↑ 29.2% vs last period</span>
          </div>
        </div>

        {/* Breakdown Per Configured Platform */}
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#050505', marginBottom: 14 }}>
          {selectedPlatform === 'ALL' ? 'Per-Platform Analytics Breakdown' : 'Selected Platform Detailed Report'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {filteredMetrics.map(item => (
            <div key={item.platformId} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E6EB', borderRadius: 10, padding: 18, borderLeft: `4px solid ${item.brandColor}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: item.brandColor }} />
                  <strong style={{ fontSize: 16, color: '#050505' }}>{item.name}</strong>
                  <span style={{ backgroundColor: '#E7F3FF', color: '#1877F2', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>
                    API Connected
                  </span>
                </div>

                <a href={item.topPostUrl} target="_blank" rel="noreferrer" style={{ color: item.brandColor, fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
                  Top Post <ExternalLink size={14} />
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, backgroundColor: '#F0F2F5', padding: 12, borderRadius: 8, textAlign: 'center', marginBottom: 12 }}>
                <div>
                  <span style={{ fontSize: 11, color: '#65676B', display: 'block' }}>Reach</span>
                  <strong style={{ fontSize: 15, color: '#050505' }}>{item.reach.toLocaleString()}</strong>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: '#65676B', display: 'block' }}>Impressions</span>
                  <strong style={{ fontSize: 15, color: '#050505' }}>{item.impressions.toLocaleString()}</strong>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: '#65676B', display: 'block' }}>Likes</span>
                  <strong style={{ fontSize: 15, color: '#050505' }}>{item.likes.toLocaleString()}</strong>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: '#65676B', display: 'block' }}>Comments</span>
                  <strong style={{ fontSize: 15, color: '#050505' }}>{item.comments.toLocaleString()}</strong>
                </div>
                <div>
                  <span style={{ fontSize: 11, color: '#65676B', display: 'block' }}>Shares</span>
                  <strong style={{ fontSize: 15, color: '#050505' }}>{item.shares.toLocaleString()}</strong>
                </div>
              </div>

              <div style={{ fontSize: 13, color: '#050505', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Sparkles size={14} color={item.brandColor} />
                <span><strong>Top Performing Post:</strong> &quot;{item.topPostTitle}&quot;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 24, color: '#1877F2' }}>Loading analytics...</div>}>
      <AnalyticsContent />
    </Suspense>
  );
}

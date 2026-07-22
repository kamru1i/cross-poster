'use client';

import React, { useState } from 'react';
import { 
  Send, 
  Image as ImageIcon, 
  CheckCircle2, 
  ExternalLink, 
  Radio, 
  Check, 
  Sparkles,
  Calendar,
  Tag,
  Clock,
  Bookmark,
  Plus,
  X,
  ListFilter,
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import { SocialPlatform, PublishResult, PostPublishMode, BestTimeRecommendation } from '@/types/social';

interface ConnectedAccount {
  id: string;
  name: string;
  platform: SocialPlatform;
  avatar: string;
  brandColor: string;
}

export default function PostStudioPage() {
  const [caption, setCaption] = useState('');
  const [selectedAccountIds, setSelectedAccountIds] = useState<string[]>([
    'fb-page-1', 'yt-channel-1', 'ig-account-1'
  ]);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  
  // Meta Business Suite Features
  const [publishMode, setPublishMode] = useState<PostPublishMode>('IMMEDIATE');
  const [scheduledDateTime, setScheduledDateTime] = useState('');
  const [tags, setTags] = useState<string[]>(['#TechNews', '#SocialMedia', '@PartnerBrand']);
  const [newTagInput, setNewTagInput] = useState('');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [logFilterRange, setLogFilterRange] = useState<'7DAYS' | '30DAYS' | 'ALL'>('30DAYS');

  // Connected Accounts
  const accounts: ConnectedAccount[] = [
    { id: 'fb-page-1', name: 'My Tech Page', platform: 'FB_PAGE', avatar: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1000', brandColor: '#1877F2' },
    { id: 'yt-channel-1', name: 'My Tech Channel', platform: 'YOUTUBE_VIDEO', avatar: 'https://yt3.ggpht.com/ytc/default-user', brandColor: '#FF0000' },
    { id: 'ig-account-1', name: 'Tech_Daily_IG', platform: 'INSTAGRAM', avatar: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1001', brandColor: '#E4405F' },
    { id: 'x-twitter-1', name: '@TechDailyNews', platform: 'X_TWITTER', avatar: 'https://pbs.twimg.com/profile_images/default', brandColor: '#000000' },
    { id: 'threads-1', name: 'TechDailyThreads', platform: 'THREADS', avatar: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=1002', brandColor: '#000000' },
  ];

  // Best Time Recommendations (Meta Suite Analytics AI)
  const bestTimeRecommendations: BestTimeRecommendation[] = [
    { platform: 'FB_PAGE', bestTimeLabel: 'Today at 8:30 PM', recommendedDateTime: '2026-07-23T20:30', reason: '94% of your Facebook followers are active' },
    { platform: 'INSTAGRAM', bestTimeLabel: 'Today at 9:00 PM', recommendedDateTime: '2026-07-23T21:00', reason: 'Peak Instagram Reel engagement hour' },
    { platform: 'YOUTUBE_VIDEO', bestTimeLabel: 'Tomorrow at 4:00 PM', recommendedDateTime: '2026-07-24T16:00', reason: 'Optimal YouTube Shorts watch time' },
  ];

  // 30-Day Audit History Logs with Multi-Platform Reach Analytics
  const [auditLogs, setAuditLogs] = useState<PublishResult[]>([
    {
      id: 'log-1',
      accountId: 'fb-page-1',
      accountName: 'My Tech Page',
      platform: 'FB_PAGE',
      success: true,
      status: 'PUBLISHED',
      postUrl: 'https://facebook.com/post/published-1001',
      tags: ['#TechNews', '#AI'],
      analytics: { platform: 'FB_PAGE', reach: 14200, impressions: 18500, likes: 890, comments: 142, shares: 64 },
      createdAt: new Date(Date.now() - 86400000 * 2).toLocaleDateString(),
    },
    {
      id: 'log-2',
      accountId: 'ig-account-1',
      accountName: 'Tech_Daily_IG',
      platform: 'INSTAGRAM',
      success: true,
      status: 'PUBLISHED',
      postUrl: 'https://instagram.com/post/published-1002',
      tags: ['#Reels', '#Gadgets'],
      analytics: { platform: 'INSTAGRAM', reach: 22400, impressions: 29800, likes: 1840, comments: 230, shares: 190 },
      createdAt: new Date(Date.now() - 86400000 * 4).toLocaleDateString(),
    },
    {
      id: 'log-3',
      accountId: 'yt-channel-1',
      accountName: 'My Tech Channel',
      platform: 'YOUTUBE_VIDEO',
      success: true,
      status: 'SCHEDULED',
      scheduledAt: 'Tomorrow at 4:00 PM',
      tags: ['#Shorts'],
      analytics: { platform: 'YOUTUBE_VIDEO', reach: 0, impressions: 0, likes: 0, comments: 0, shares: 0 },
      createdAt: new Date().toLocaleDateString(),
    }
  ]);

  const toggleAccountSelection = (id: string) => {
    setSelectedAccountIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectAllAccounts = () => {
    if (selectedAccountIds.length === accounts.length) {
      setSelectedAccountIds([]);
    } else {
      setSelectedAccountIds(accounts.map(a => a.id));
    }
  };

  const handleAddTag = () => {
    if (newTagInput.trim() && !tags.includes(newTagInput.trim())) {
      setTags([...tags, newTagInput.trim().startsWith('#') || newTagInput.trim().startsWith('@') ? newTagInput.trim() : `#${newTagInput.trim()}`]);
      setNewTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleApplyBestTime = (timeStr: string) => {
    setPublishMode('SCHEDULED');
    setScheduledDateTime(timeStr);
  };

  const handleSubmit = async () => {
    if (!caption.trim()) {
      alert('Please enter a caption before proceeding!');
      return;
    }
    if (selectedAccountIds.length === 0) {
      alert('Please select at least one social account target!');
      return;
    }
    if (publishMode === 'SCHEDULED' && !scheduledDateTime) {
      alert('Please choose a date & time for scheduling the post!');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const results: PublishResult[] = selectedAccountIds.map(accId => {
        const acc = accounts.find(a => a.id === accId)!;
        return {
          id: `log-${Date.now()}-${accId}`,
          accountId: acc.id,
          accountName: acc.name,
          platform: acc.platform,
          success: true,
          status: publishMode === 'IMMEDIATE' ? 'PUBLISHED' : publishMode === 'SCHEDULED' ? 'SCHEDULED' : 'DRAFT_SAVED',
          postUrl: publishMode === 'IMMEDIATE' ? `https://${acc.platform.toLowerCase().replace('_', '')}.com/post/published-${Date.now()}` : undefined,
          scheduledAt: publishMode === 'SCHEDULED' ? new Date(scheduledDateTime).toLocaleString() : undefined,
          tags,
          analytics: { platform: acc.platform, reach: 0, impressions: 0, likes: 0, comments: 0, shares: 0 },
          createdAt: new Date().toLocaleDateString(),
        };
      });

      setAuditLogs(prev => [...results, ...prev]);
      setIsProcessing(false);
      
      alert(publishMode === 'IMMEDIATE' ? 'Post published successfully!' : publishMode === 'SCHEDULED' ? 'Post scheduled successfully!' : 'Saved to drafts!');
      setCaption('');
      setMediaFile(null);
    }, 1500);
  };

  // Calculate 30-Day Totals
  const totalReach = auditLogs.reduce((sum, log) => sum + (log.analytics?.reach || 0), 0);
  const totalImpressions = auditLogs.reduce((sum, log) => sum + (log.analytics?.impressions || 0), 0);
  const totalLikes = auditLogs.reduce((sum, log) => sum + (log.analytics?.likes || 0), 0);
  const totalComments = auditLogs.reduce((sum, log) => sum + (log.analytics?.comments || 0), 0);

  return (
    <div className="grid-container">
      {/* Left Column: Post Creator & Meta Business Suite Manager */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Header Title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>Meta Suite Studio & Analytics</h1>
            <p style={{ color: '#65676B', fontSize: 14 }}>Post, schedule, and track 30-day reach across all your connected social channels</p>
          </div>
          <a href="/live" className="btn btn-live">
            <Radio size={16} /> Go Live Now
          </a>
        </div>

        {/* 30-Day Reach & Performance Overview Bar */}
        <div className="card" style={{ backgroundColor: '#FFFFFF', border: '1px solid #1877F2' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1877F2', display: 'flex', alignItems: 'center', gap: 8 }}>
              <TrendingUp size={18} /> 30-Day Social Reach Insights
            </h3>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#65676B' }}>Auto-Synced via Graph API</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, textAlign: 'center' }}>
            <div style={{ background: '#F0F2F5', padding: 12, borderRadius: 8 }}>
              <Users size={16} color="#1877F2" style={{ margin: '0 auto 4px' }} />
              <strong style={{ fontSize: 18, color: '#050505', display: 'block' }}>{totalReach.toLocaleString()}</strong>
              <span style={{ fontSize: 12, color: '#65676B' }}>Total Reach</span>
            </div>
            <div style={{ background: '#F0F2F5', padding: 12, borderRadius: 8 }}>
              <Eye size={16} color="#FF0000" style={{ margin: '0 auto 4px' }} />
              <strong style={{ fontSize: 18, color: '#050505', display: 'block' }}>{totalImpressions.toLocaleString()}</strong>
              <span style={{ fontSize: 12, color: '#65676B' }}>Impressions</span>
            </div>
            <div style={{ background: '#F0F2F5', padding: 12, borderRadius: 8 }}>
              <ThumbsUp size={16} color="#E4405F" style={{ margin: '0 auto 4px' }} />
              <strong style={{ fontSize: 18, color: '#050505', display: 'block' }}>{totalLikes.toLocaleString()}</strong>
              <span style={{ fontSize: 12, color: '#65676B' }}>Likes & Reactions</span>
            </div>
            <div style={{ background: '#F0F2F5', padding: 12, borderRadius: 8 }}>
              <MessageSquare size={16} color="#0A66C2" style={{ margin: '0 auto 4px' }} />
              <strong style={{ fontSize: 18, color: '#050505', display: 'block' }}>{totalComments.toLocaleString()}</strong>
              <span style={{ fontSize: 12, color: '#65676B' }}>Comments</span>
            </div>
          </div>
        </div>

        {/* Target Platform Selector */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#050505' }}>
              Select Target Accounts ({selectedAccountIds.length}/{accounts.length})
            </h3>
            <button onClick={selectAllAccounts} style={{ background: 'none', border: 'none', color: '#1877F2', cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>
              {selectedAccountIds.length === accounts.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {accounts.map(acc => {
              const isSelected = selectedAccountIds.includes(acc.id);
              return (
                <div
                  key={acc.id}
                  onClick={() => toggleAccountSelection(acc.id)}
                  className={`target-chip ${isSelected ? 'selected' : ''}`}
                  style={{ borderColor: isSelected ? acc.brandColor : '#CED0D4' }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: acc.brandColor, display: 'inline-block' }} />
                  <span>{acc.name}</span>
                  {isSelected && <Check size={14} color={acc.brandColor} />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Post Composer & Scheduling Card */}
        <div className="card">
          {/* Publish Mode Toggle Tabs */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16, borderBottom: '1px solid #E4E6EB', paddingBottom: 12 }}>
            <button 
              className={`btn ${publishMode === 'IMMEDIATE' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: 13, padding: '8px 14px' }}
              onClick={() => setPublishMode('IMMEDIATE')}
            >
              <Send size={14} /> Publish Now
            </button>
            <button 
              className={`btn ${publishMode === 'SCHEDULED' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: 13, padding: '8px 14px' }}
              onClick={() => setPublishMode('SCHEDULED')}
            >
              <Calendar size={14} /> Schedule Post
            </button>
            <button 
              className={`btn ${publishMode === 'DRAFT' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: 13, padding: '8px 14px' }}
              onClick={() => setPublishMode('DRAFT')}
            >
              <Bookmark size={14} /> Save Draft
            </button>
          </div>

          {/* Optimal Best Time Recommendation Widget */}
          <div style={{ backgroundColor: '#E7F3FF', border: '1px solid #1877F2', padding: 12, borderRadius: 8, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <Sparkles size={16} color="#1877F2" />
              <strong style={{ fontSize: 13, color: '#1877F2' }}>Meta Suite AI: Recommended Best Posting Times</strong>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {bestTimeRecommendations.map((rec, i) => (
                <button
                  key={i}
                  onClick={() => handleApplyBestTime(rec.recommendedDateTime)}
                  style={{
                    background: 'white',
                    border: '1px solid #1877F2',
                    borderRadius: 14,
                    padding: '4px 10px',
                    fontSize: 12,
                    cursor: 'pointer',
                    color: '#050505',
                    fontWeight: 600
                  }}
                >
                  ⚡ {rec.bestTimeLabel} ({rec.platform.replace('_', ' ')})
                </button>
              ))}
            </div>
          </div>

          {/* DateTime Picker for Scheduling */}
          {publishMode === 'SCHEDULED' && (
            <div style={{ backgroundColor: '#FAFAFA', border: '1px solid #CED0D4', padding: 14, borderRadius: 8, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={18} color="#1877F2" />
                <span style={{ fontSize: 13, fontWeight: 600, color: '#050505' }}>Set Date & Time:</span>
              </div>
              <input 
                type="datetime-local" 
                className="input-field" 
                style={{ width: 'auto', padding: '6px 12px' }}
                value={scheduledDateTime}
                onChange={(e) => setScheduledDateTime(e.target.value)}
              />
            </div>
          )}

          {/* Caption Input */}
          <textarea
            className="input-field"
            placeholder="Write your post caption or announcement here..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Tags & Account Mentions Bar */}
          <div style={{ marginTop: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#050505', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <Tag size={14} color="#1877F2" /> Hashtags & Mentions
            </label>
            
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Add tag (e.g. #Tech or @Partner)"
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                style={{ padding: '8px 12px', fontSize: 13 }}
              />
              <button onClick={handleAddTag} className="btn btn-secondary" style={{ padding: '8px 14px' }}>
                <Plus size={14} /> Add
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {tags.map((tag, idx) => (
                <span key={idx} style={{ backgroundColor: '#E7F3FF', color: '#1877F2', fontWeight: 600, fontSize: 12, padding: '4px 10px', borderRadius: 14, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {tag}
                  <X size={12} style={{ cursor: 'pointer' }} onClick={() => handleRemoveTag(tag)} />
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingTop: 14, borderTop: '1px solid #E4E6EB' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <label className="btn btn-secondary" style={{ cursor: 'pointer', fontSize: 13 }}>
                <ImageIcon size={16} />
                <span>Media File</span>
                <input type="file" accept="image/*,video/*" style={{ display: 'none' }} onChange={(e) => setMediaFile(e.target.files?.[0] || null)} />
              </label>
              {mediaFile && (
                <span style={{ fontSize: 12, color: '#1877F2', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <CheckCircle2 size={14} /> {mediaFile.name}
                </span>
              )}
            </div>

            <button className="btn btn-primary" onClick={handleSubmit} disabled={isProcessing}>
              {isProcessing ? 'Processing...' : (
                publishMode === 'IMMEDIATE' ? <><Send size={16} /> Publish Now</> :
                publishMode === 'SCHEDULED' ? <><Calendar size={16} /> Schedule Post</> :
                <><Bookmark size={16} /> Save to Drafts</>
              )}
            </button>
          </div>
        </div>

        {/* 30-Day Post Retention Log & Reach Analytics Table */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1877F2', display: 'flex', alignItems: 'center', gap: 8 }}>
              <BarChart3 size={18} /> 30-Day Post Log & Per-Post Reach Tracker
            </h3>
            <div style={{ display: 'flex', gap: 6 }}>
              <button 
                className={`btn ${logFilterRange === '7DAYS' ? 'btn-primary' : 'btn-secondary'}`} 
                style={{ fontSize: 12, padding: '4px 10px' }}
                onClick={() => setLogFilterRange('7DAYS')}
              >
                7 Days
              </button>
              <button 
                className={`btn ${logFilterRange === '30DAYS' ? 'btn-primary' : 'btn-secondary'}`} 
                style={{ fontSize: 12, padding: '4px 10px' }}
                onClick={() => setLogFilterRange('30DAYS')}
              >
                30 Days (Active)
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {auditLogs.map((log) => (
              <div key={log.id} style={{ padding: '12px 16px', background: '#F0F2F5', borderRadius: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle2 size={18} color={log.status === 'PUBLISHED' ? '#1877F2' : '#FF9800'} />
                    <div>
                      <strong style={{ fontSize: 14 }}>{log.accountName}</strong>
                      <span style={{ fontSize: 11, fontWeight: 700, color: log.status === 'PUBLISHED' ? '#1877F2' : '#FF9800', backgroundColor: '#FFFFFF', padding: '2px 8px', borderRadius: 10, marginLeft: 8 }}>
                        {log.status}
                      </span>
                    </div>
                  </div>
                  {log.postUrl && (
                    <a href={log.postUrl} target="_blank" rel="noreferrer" style={{ color: '#1877F2', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
                      View Post <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Per-Post Reach & Engagement Bar */}
                {log.analytics && log.status === 'PUBLISHED' && (
                  <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#65676B', backgroundColor: '#FFFFFF', padding: '6px 12px', borderRadius: 6, marginTop: 6 }}>
                    <span>👥 Reach: <strong>{log.analytics.reach.toLocaleString()}</strong></span>
                    <span>👁️ Impressions: <strong>{log.analytics.impressions.toLocaleString()}</strong></span>
                    <span>👍 Likes: <strong>{log.analytics.likes.toLocaleString()}</strong></span>
                    <span>💬 Comments: <strong>{log.analytics.comments.toLocaleString()}</strong></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Live Platform Preview Card */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="card" style={{ position: 'sticky', top: 80 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
            <Sparkles size={18} color="#1877F2" />
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#050505' }}>Meta Suite Live Preview</h3>
          </div>

          <div style={{ border: '1px solid #CED0D4', borderRadius: 12, padding: 14, background: '#FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: '#1877F2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                FB
              </div>
              <div>
                <strong style={{ fontSize: 14, color: '#050505', display: 'block' }}>My Tech Page</strong>
                <span style={{ fontSize: 12, color: '#65676B' }}>
                  {publishMode === 'IMMEDIATE' ? 'Just now · 🌎' : `📅 Scheduled for ${scheduledDateTime || 'Future Date'}`}
                </span>
              </div>
            </div>

            <p style={{ fontSize: 14, color: '#050505', whiteSpace: 'pre-wrap', marginBottom: 10 }}>
              {caption || 'Your Meta Suite post preview will render here in real-time as you type...'}
            </p>

            {tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                {tags.map((tag, idx) => (
                  <span key={idx} style={{ color: '#1877F2', fontWeight: 600, fontSize: 13 }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

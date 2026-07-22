'use client';

import React, { useState } from 'react';
import { Radio, Video, Play, Square, Settings, ShieldCheck, Check } from 'lucide-react';

export default function LiveStudioPage() {
  const [streamTitle, setStreamTitle] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['FB_LIVE', 'YT_LIVE']);
  const [isStreaming, setIsStreaming] = useState(false);

  const availablePlatforms = [
    { id: 'FB_LIVE', name: 'Facebook Live', color: '#1877F2' },
    { id: 'YT_LIVE', name: 'YouTube Live', color: '#FF0000' },
    { id: 'TWITCH_LIVE', name: 'Twitch / Custom RTMP', color: '#9146FF' },
    { id: 'LINKEDIN_LIVE', name: 'LinkedIn Live', color: '#0A66C2' },
  ];

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleToggleStream = () => {
    if (!streamTitle.trim()) {
      alert('Please set a title for your live stream before going live!');
      return;
    }
    if (selectedPlatforms.length === 0) {
      alert('Please select at least one platform to broadcast live!');
      return;
    }
    setIsStreaming(!isStreaming);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #E4E6EB' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Radio size={28} color="#FF0000" />
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: '#050505' }}>Multi-Platform Live Broadcast Studio</h1>
              <p style={{ color: '#65676B', fontSize: 14 }}>Broadcast live RTMP streams simultaneously to Facebook, YouTube, Twitch & LinkedIn</p>
            </div>
          </div>

          <button 
            className={`btn ${isStreaming ? 'btn-live' : 'btn-primary'}`}
            onClick={handleToggleStream}
            style={{ padding: '10px 20px', fontSize: 15 }}
          >
            {isStreaming ? (
              <><Square size={18} /> End Stream</>
            ) : (
              <><Play size={18} /> Start Multi-Stream</>
            )}
          </button>
        </div>

        {/* Live Title Input */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#050505', display: 'block', marginBottom: 6 }}>
            Broadcast Stream Title
          </label>
          <input 
            type="text" 
            className="input-field"
            placeholder="e.g., Live Product Launch & Q&A Session"
            value={streamTitle}
            onChange={(e) => setStreamTitle(e.target.value)}
            disabled={isStreaming}
          />
        </div>

        {/* Target Platforms Toggle */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#050505', display: 'block', marginBottom: 10 }}>
            Target Multi-Stream Platforms ({selectedPlatforms.length})
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {availablePlatforms.map((platform) => {
              const isSelected = selectedPlatforms.includes(platform.id);
              return (
                <div
                  key={platform.id}
                  onClick={() => !isStreaming && togglePlatform(platform.id)}
                  className={`target-chip ${isSelected ? 'selected' : ''}`}
                  style={{
                    borderColor: isSelected ? platform.color : '#CED0D4',
                    padding: '10px 16px',
                    opacity: isStreaming ? 0.7 : 1,
                    cursor: isStreaming ? 'not-allowed' : 'pointer'
                  }}
                >
                  <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: platform.color }} />
                  <span style={{ fontWeight: 600 }}>{platform.name}</span>
                  {isSelected && <Check size={16} color={platform.color} />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stream Status & RTMP Control Panel */}
        <div style={{ backgroundColor: isStreaming ? '#E7F3FF' : '#F0F2F5', padding: 20, borderRadius: 10, border: `1px solid ${isStreaming ? '#1877F2' : '#CED0D4'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Video size={24} color={isStreaming ? '#FF0000' : '#65676B'} />
              <div>
                <strong style={{ fontSize: 16, color: '#050505' }}>
                  Status: {isStreaming ? '🔴 LIVE BROADCASTING' : '⚪ IDLE (Ready to Stream)'}
                </strong>
                <span style={{ fontSize: 12, color: '#65676B', display: 'block' }}>
                  {isStreaming ? 'RTMP relaying active across all selected channels' : 'Configure titles and select channels to initiate stream'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#1877F2', fontWeight: 600 }}>
                <ShieldCheck size={16} /> Encryption Key Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

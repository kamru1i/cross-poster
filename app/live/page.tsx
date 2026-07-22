'use client';

import React, { useState } from 'react';
import { Radio, Video, Play, Square, Settings, ShieldCheck, Check } from 'lucide-react';

export default function LiveStudioPage() {
  const [streamTitle, setStreamTitle] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['FB_LIVE', 'YT_LIVE']);
  const [isStreaming, setIsStreaming] = useState(false);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      window.location.href = '/login';
    }
  }, []);

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
    if (!isStreaming && !streamTitle.trim()) {
      alert('Please enter a stream title before going live!');
      return;
    }
    if (!isStreaming && selectedPlatforms.length === 0) {
      alert('Please select at least one live stream platform target!');
      return;
    }

    setIsStreaming(!isStreaming);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Radio size={28} color="#FF0000" />
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2' }}>Cross Poster Live Streaming Studio</h1>
              <p style={{ color: '#65676B', fontSize: 14 }}>Broadcast your live stream simultaneously across selected platforms</p>
            </div>
          </div>
          {isStreaming && (
            <span style={{ 
              backgroundColor: '#FF0000', 
              color: 'white', 
              padding: '6px 14px', 
              borderRadius: 20, 
              fontWeight: 700, 
              fontSize: 13,
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              ● LIVE NOW
            </span>
          )}
        </div>

        {/* Stream Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 6 }}>Stream Broadcast Title</label>
            <input 
              className="input-field" 
              placeholder="e.g. Weekly Tech Q&A and Live Discussion"
              value={streamTitle}
              onChange={(e) => setStreamTitle(e.target.value)}
              disabled={isStreaming}
            />
          </div>

          {/* Select Live Platforms */}
          <div>
            <label style={{ fontSize: 14, fontWeight: 600, display: 'block', marginBottom: 8 }}>Select Live Destination Targets</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {availablePlatforms.map(platform => {
                const isSelected = selectedPlatforms.includes(platform.id);
                return (
                  <div
                    key={platform.id}
                    onClick={() => !isStreaming && togglePlatform(platform.id)}
                    className={`target-chip ${isSelected ? 'selected' : ''}`}
                    style={{ borderColor: isSelected ? platform.color : '#CED0D4' }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: platform.color }} />
                    <span>{platform.name}</span>
                    {isSelected && <Check size={14} color={platform.color} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Preview Box */}
          <div style={{ 
            height: 420, 
            backgroundColor: '#050505', 
            borderRadius: 12, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            position: 'relative',
            marginTop: 10
          }}>
            <Video size={54} color={isStreaming ? '#FF0000' : '#65676B'} />
            <p style={{ marginTop: 12, fontSize: 15, color: isStreaming ? '#FFFFFF' : '#65676B' }}>
              {isStreaming ? `Broadcasting live to ${selectedPlatforms.length} destinations...` : 'Camera Preview / WebRTC Encoder Ready'}
            </p>

            <div style={{ position: 'absolute', bottom: 24 }}>
              <button 
                className={isStreaming ? 'btn btn-secondary' : 'btn btn-live'}
                onClick={handleToggleStream}
                style={{ padding: '12px 28px', fontSize: 16 }}
              >
                {isStreaming ? <><Square size={18} /> End Stream</> : <><Play size={18} fill="white" /> Start Multi-Live Stream</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

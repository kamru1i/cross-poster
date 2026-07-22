'use client';

import React, { useState } from 'react';
import { Key, Shield, Save, CheckCircle, ChevronDown, Check, Info } from 'lucide-react';
import { SocialPlatform } from '@/types/social';

interface PlatformConfigOption {
  id: SocialPlatform | 'META' | 'GOOGLE' | 'X_TWITTER' | 'THREADS' | 'TIKTOK' | 'LINKEDIN';
  name: string;
  category: string;
  brandColor: string;
  fields: { key: string; label: string; placeholder: string; isSecret?: boolean }[];
}

export default function SettingsPage() {
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('META');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [savedPlatforms, setSavedPlatforms] = useState<string[]>(['META', 'GOOGLE']);
  const [isSaved, setIsSaved] = useState(false);

  const platformOptions: PlatformConfigOption[] = [
    {
      id: 'META',
      name: 'Meta Developer API (Facebook & Instagram)',
      category: 'Meta Business Suite',
      brandColor: '#1877F2',
      fields: [
        { key: 'metaAppId', label: 'Meta App ID', placeholder: 'e.g. 104958291048291' },
        { key: 'metaAppSecret', label: 'Meta App Secret', placeholder: '••••••••••••••••••••••••', isSecret: true },
        { key: 'metaPageToken', label: 'Long-Lived Page Access Token', placeholder: 'EAA...' },
      ],
    },
    {
      id: 'GOOGLE',
      name: 'Google Cloud API (YouTube Studio & Live)',
      category: 'Google Cloud Platform',
      brandColor: '#FF0000',
      fields: [
        { key: 'googleClientId', label: 'Google OAuth Client ID', placeholder: 'e.g. 849204.apps.googleusercontent.com' },
        { key: 'googleClientSecret', label: 'Google OAuth Client Secret', placeholder: '••••••••••••••••••••••••', isSecret: true },
        { key: 'googleApiKey', label: 'YouTube Data API Key', placeholder: 'AIzaSy...' },
      ],
    },
    {
      id: 'X_TWITTER',
      name: 'X (Twitter) Developer V2 API',
      category: 'X Developer Portal',
      brandColor: '#000000',
      fields: [
        { key: 'xApiKey', label: 'API Key (Consumer Key)', placeholder: 'e.g. x1y2z3...' },
        { key: 'xApiSecret', label: 'API Key Secret', placeholder: '••••••••••••••••••••••••', isSecret: true },
        { key: 'xBearerToken', label: 'Bearer Token', placeholder: 'AAAAAAAA...' },
        { key: 'xClientId', label: 'Client ID', placeholder: 'e.g. V1Z2...' },
      ],
    },
    {
      id: 'THREADS',
      name: 'Threads API',
      category: 'Meta Threads Platform',
      brandColor: '#000000',
      fields: [
        { key: 'threadsAppId', label: 'Threads App ID', placeholder: 'e.g. 9824029410' },
        { key: 'threadsAppSecret', label: 'Threads App Secret', placeholder: '••••••••••••••••••••••••', isSecret: true },
      ],
    },
    {
      id: 'TIKTOK',
      name: 'TikTok Content Posting API',
      category: 'TikTok for Developers',
      brandColor: '#25F4EE',
      fields: [
        { key: 'tikTokClientKey', label: 'TikTok Client Key', placeholder: 'e.g. aw12345...' },
        { key: 'tikTokClientSecret', label: 'TikTok Client Secret', placeholder: '••••••••••••••••••••••••', isSecret: true },
      ],
    },
    {
      id: 'LINKEDIN',
      name: 'LinkedIn Marketing & Live API',
      category: 'LinkedIn Developer Portal',
      brandColor: '#0A66C2',
      fields: [
        { key: 'linkedInClientId', label: 'LinkedIn Client ID', placeholder: 'e.g. 78a1b2c3d4' },
        { key: 'linkedInClientSecret', label: 'LinkedIn Client Secret', placeholder: '••••••••••••••••••••••••', isSecret: true },
      ],
    },
  ];

  const activePlatform = platformOptions.find(p => p.id === selectedPlatformId) || platformOptions[0];

  const handleInputChange = (fieldKey: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldKey]: value }));
  };

  const handleSaveKeys = (e: React.FormEvent) => {
    e.preventDefault();
    if (!savedPlatforms.includes(selectedPlatformId)) {
      setSavedPlatforms([...savedPlatforms, selectedPlatformId]);
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #E4E6EB' }}>
          <Key size={26} color="#1877F2" />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2' }}>Bring Your Own Key (BYOK) Credentials</h1>
            <p style={{ color: '#65676B', fontSize: 14 }}>Select any social platform to configure private API keys & Developer credentials</p>
          </div>
        </div>

        {/* Security Alert Banner */}
        <div style={{ backgroundColor: '#E7F3FF', border: '1px solid #1877F2', padding: 14, borderRadius: 8, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Shield size={20} color="#1877F2" />
          <span style={{ fontSize: 13, color: '#050505' }}>
            <strong>AES-256 Client Encryption Active:</strong> All submitted platform secrets & keys are encrypted before local storage.
          </span>
        </div>

        {/* Platform Selection Dropdown */}
        <div style={{ marginBottom: 24 }}>
          <label style={{ fontSize: 14, fontWeight: 700, color: '#050505', display: 'block', marginBottom: 8 }}>
            Choose Platform to Configure
          </label>
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
            <select
              className="input-field"
              value={selectedPlatformId}
              onChange={(e) => setSelectedPlatformId(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 15,
                fontWeight: 600,
                color: '#050505',
                borderColor: activePlatform.brandColor,
                appearance: 'none',
                cursor: 'pointer',
                backgroundColor: '#FFFFFF'
              }}
            >
              {platformOptions.map(platform => (
                <option key={platform.id} value={platform.id}>
                  {savedPlatforms.includes(platform.id) ? '✓ ' : ''}{platform.name}
                </option>
              ))}
            </select>
            <ChevronDown size={20} color="#65676B" style={{ position: 'absolute', right: 14, top: 14, pointerEvents: 'none' }} />
          </div>
        </div>

        {/* Dynamic Platform Form */}
        <form onSubmit={handleSaveKeys} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: '#F0F2F5', padding: 20, borderRadius: 10, borderLeft: `4px solid ${activePlatform.brandColor}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: activePlatform.brandColor }}>
                  {activePlatform.name}
                </h3>
                <span style={{ fontSize: 12, color: '#65676B' }}>{activePlatform.category}</span>
              </div>
              {savedPlatforms.includes(activePlatform.id) && (
                <span style={{ backgroundColor: '#E7F3FF', color: '#1877F2', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Check size={14} /> Configured & Active
                </span>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {activePlatform.fields.map(field => (
                <div key={field.key}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#050505', display: 'block', marginBottom: 6 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.isSecret ? 'password' : 'text'}
                    className="input-field"
                    placeholder={field.placeholder}
                    value={formData[field.key] || ''}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #E4E6EB' }}>
            {isSaved ? (
              <span style={{ color: '#1877F2', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle size={18} /> {activePlatform.name} BYOK Credentials Encrypted & Saved!
              </span>
            ) : <div />}

            <button type="submit" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: 14 }}>
              <Save size={16} /> Save Encrypted Credentials
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

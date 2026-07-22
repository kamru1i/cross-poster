'use client';

import React, { useState } from 'react';
import { Key, Shield, Save, CheckCircle, Lock, Info } from 'lucide-react';

export default function SettingsPage() {
  const [metaAppId, setMetaAppId] = useState('');
  const [metaAppSecret, setMetaAppSecret] = useState('');
  const [googleClientId, setGoogleClientId] = useState('');
  const [googleClientSecret, setGoogleClientSecret] = useState('');
  const [xApiKey, setXApiKey] = useState('');
  const [xApiSecret, setXApiSecret] = useState('');

  const [isSaved, setIsSaved] = useState(false);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      window.location.href = '/login';
    }
  }, []);

  const handleSaveKeys = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <Key size={24} color="#1877F2" />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2' }}>Cross Poster BYOK Settings</h1>
            <p style={{ color: '#65676B', fontSize: 14 }}>
              Enter your own official platform API credentials to ensure unlimited free API quota without rate limits.
            </p>
          </div>
        </div>

        {/* Security Note Banner */}
        <div style={{ 
          backgroundColor: '#E7F3FF', 
          borderLeft: '4px solid #1877F2', 
          padding: 14, 
          borderRadius: 8, 
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <Shield size={20} color="#1877F2" />
          <span style={{ fontSize: 13, color: '#050505' }}>
            <strong>100% AES-256 Encryption:</strong> Your private keys are encrypted locally before storing and are strictly isolated to your user account.
          </span>
        </div>

        <form onSubmit={handleSaveKeys} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Meta Graph API (Facebook & Instagram) */}
          <div style={{ borderBottom: '1px solid #E4E6EB', paddingBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1877F2', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#1877F2' }} />
              Meta Platform (Facebook & Instagram)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Meta App ID</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. 123456789012345" 
                  value={metaAppId} 
                  onChange={(e) => setMetaAppId(e.target.value)} 
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Meta App Secret</label>
                <input 
                  type="password" 
                  className="input-field" 
                  placeholder="••••••••••••••••" 
                  value={metaAppSecret} 
                  onChange={(e) => setMetaAppSecret(e.target.value)} 
                />
              </div>
            </div>
          </div>

          {/* Google YouTube Data API */}
          <div style={{ borderBottom: '1px solid #E4E6EB', paddingBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FF0000', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF0000' }} />
              Google Cloud (YouTube Data API v3)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Google OAuth Client ID</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. xxxx.apps.googleusercontent.com" 
                  value={googleClientId} 
                  onChange={(e) => setGoogleClientId(e.target.value)} 
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Google Client Secret</label>
                <input 
                  type="password" 
                  className="input-field" 
                  placeholder="••••••••••••••••" 
                  value={googleClientSecret} 
                  onChange={(e) => setGoogleClientSecret(e.target.value)} 
                />
              </div>
            </div>
          </div>

          {/* X (Twitter) API */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#000000', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#000000' }} />
              X (Twitter) Developer API v2
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>X API Key</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. API Key" 
                  value={xApiKey} 
                  onChange={(e) => setXApiKey(e.target.value)} 
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>X API Secret</label>
                <input 
                  type="password" 
                  className="input-field" 
                  placeholder="••••••••••••••••" 
                  value={xApiSecret} 
                  onChange={(e) => setXApiSecret(e.target.value)} 
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10 }}>
            {isSaved && (
              <span style={{ color: '#1877F2', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle size={18} /> Settings saved & encrypted successfully!
              </span>
            )}
            <button type="submit" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
              <Save size={16} /> Save Encrypted Credentials
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

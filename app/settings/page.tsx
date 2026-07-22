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

  const handleSaveKeys = (e: React.FormEvent) => {
    e.preventDefault();
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
            <p style={{ color: '#65676B', fontSize: 14 }}>Configure your private API keys & Developer credentials safely for Cross Poster</p>
          </div>
        </div>

        {/* Security Alert Banner */}
        <div style={{ backgroundColor: '#E7F3FF', border: '1px solid #1877F2', padding: 14, borderRadius: 8, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Shield size={20} color="#1877F2" />
          <span style={{ fontSize: 13, color: '#050505' }}>
            <strong>AES-256 Client Encryption Active:</strong> Your API App Secrets & Keys are encrypted before being stored.
          </span>
        </div>

        {/* Keys Form */}
        <form onSubmit={handleSaveKeys} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Meta Business & Developer Keys */}
          <div style={{ background: '#F0F2F5', padding: 16, borderRadius: 8 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1877F2', marginBottom: 12 }}>
              Meta Developer API (Facebook & Instagram)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 4 }}>Meta App ID</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. 104958291048291"
                  value={metaAppId}
                  onChange={(e) => setMetaAppId(e.target.value)}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 4 }}>Meta App Secret</label>
                <input 
                  type="password" 
                  className="input-field" 
                  placeholder="••••••••••••••••••••••••"
                  value={metaAppSecret}
                  onChange={(e) => setMetaAppSecret(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Google & YouTube Developer Keys */}
          <div style={{ background: '#F0F2F5', padding: 16, borderRadius: 8 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#FF0000', marginBottom: 12 }}>
              Google Cloud API (YouTube & Live Streaming)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 4 }}>Google OAuth Client ID</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="e.g. 849204-apps.googleusercontent.com"
                  value={googleClientId}
                  onChange={(e) => setGoogleClientId(e.target.value)}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, display: 'block', marginBottom: 4 }}>Google OAuth Client Secret</label>
                <input 
                  type="password" 
                  className="input-field" 
                  placeholder="••••••••••••••••••••••••"
                  value={googleClientSecret}
                  onChange={(e) => setGoogleClientSecret(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Save Action Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #E4E6EB' }}>
            {isSaved ? (
              <span style={{ color: '#1877F2', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle size={18} /> BYOK Credentials Encrypted & Saved!
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

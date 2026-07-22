'use client';

import React, { useState } from 'react';
import { Mail, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [authView, setAuthView] = useState<'CHOICE' | 'EMAIL'>('CHOICE');
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccessfulAuth = () => {
    localStorage.setItem('isLoggedIn', 'true');
    onLoginSuccess();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSuccessfulAuth();
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 60px)',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 20px'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '450px', textAlign: 'center', padding: '32px 28px' }}>
        
        {/* Top Back Navigation Option when in Email view */}
        {authView === 'EMAIL' && (
          <button 
            onClick={() => setAuthView('CHOICE')}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 6, 
              background: 'none', 
              border: 'none', 
              color: '#1877F2', 
              fontWeight: 600, 
              fontSize: 13, 
              cursor: 'pointer',
              marginBottom: 16,
              float: 'left'
            }}
          >
            <ArrowLeft size={16} /> Back
          </button>
        )}

        <div style={{ marginBottom: 24, clear: 'both' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
            {isRegister ? 'Join Cross Poster' : 'Welcome to Cross Poster'}
          </h1>
          <p style={{ color: '#65676B', fontSize: 14, marginTop: 4 }}>
            Sign in to manage your cross-posting & live streaming
          </p>
        </div>

        {/* View 1: Choice Screen (Facebook, Google, Email) */}
        {authView === 'CHOICE' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 10 }}>
            {/* Facebook Button with Official Round Blue 'f' Logo */}
            <button 
              className="btn" 
              style={{ 
                backgroundColor: '#FFFFFF', 
                color: '#050505', 
                border: '1px solid #CED0D4',
                width: '100%', 
                justifyContent: 'center',
                padding: '12px 18px',
                fontSize: 15,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
              onClick={handleSuccessfulAuth}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                <path fill="#FFFFFF" d="M15.12 12.72l.48-3.12h-3v-2.02c0-.85.42-1.68 1.75-1.68h1.36V3.25S14.47 3 13.29 3c-2.4 0-3.95 1.45-3.95 4.07v2.53H6.6v3.12h2.74V24h3.38V12.72h2.4z" />
              </svg>
              <span>Facebook</span>
            </button>

            {/* Google Colorful Icon Button */}
            <button 
              className="btn" 
              style={{ 
                backgroundColor: '#FFFFFF', 
                color: '#050505', 
                border: '1px solid #CED0D4',
                width: '100%', 
                justifyContent: 'center',
                padding: '12px 18px',
                fontSize: 15,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
              onClick={handleSuccessfulAuth}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Google</span>
            </button>

            {/* Email Button */}
            <button 
              className="btn btn-secondary" 
              style={{ 
                width: '100%', 
                justifyContent: 'center',
                padding: '12px 18px',
                fontSize: 15,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
              onClick={() => setAuthView('EMAIL')}
            >
              <Mail size={18} color="#1877F2" />
              <span>Email</span>
            </button>
          </div>
        ) : (
          /* View 2: Email & Password Form */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }}>
            {isRegister && (
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Full Name</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="John Doe" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
            )}

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Email Address</label>
              <input 
                type="email" 
                className="input-field" 
                placeholder="name@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 4 }}>Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', fontSize: 15, marginTop: 6 }}>
              {isRegister ? 'Sign Up' : 'Log In'}
            </button>
          </form>
        )}

        <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid #E4E6EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13 }}>
          <Link href="/docs" style={{ color: '#1877F2', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
            <BookOpen size={14} /> Read Documentation
          </Link>
          
          <button 
            onClick={() => {
              setIsRegister(!isRegister);
              if (authView === 'CHOICE') setAuthView('EMAIL');
            }} 
            style={{ background: 'none', border: 'none', color: '#1877F2', fontWeight: 600, cursor: 'pointer' }}
          >
            {isRegister ? 'Log In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

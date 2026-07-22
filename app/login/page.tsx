'use client';

import React, { useState } from 'react';
import { Mail, Lock, User, LogIn, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [authView, setAuthView] = useState<'CHOICE' | 'EMAIL'>('CHOICE');
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccessfulAuth = () => {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/';
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

        {/* View 1: Choice Screen (Facebook, Google, Continue with Email) */}
        {authView === 'CHOICE' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 10 }}>
            <button
              className="btn"
              style={{
                backgroundColor: '#1877F2',
                color: 'white',
                width: '100%',
                justifyContent: 'center',
                padding: '12px 18px',
                fontSize: 15
              }}
              onClick={handleSuccessfulAuth}
            >
              Continue with Facebook
            </button>

            <button
              className="btn"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#050505',
                border: '1px solid #CED0D4',
                width: '100%',
                justifyContent: 'center',
                padding: '12px 18px',
                fontSize: 15
              }}
              onClick={handleSuccessfulAuth}
            >
              <span style={{ color: '#4285F4', fontWeight: 700, marginRight: 6 }}>G</span> Continue with Google
            </button>

            <button
              className="btn btn-secondary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '12px 18px',
                fontSize: 15
              }}
              onClick={() => setAuthView('EMAIL')}
            >
              <Mail size={18} color="#1877F2" /> Continue with Email
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

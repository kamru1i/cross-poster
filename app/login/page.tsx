'use client';

import React, { useState } from 'react';
import { Mail, Lock, User, LogIn, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${isRegister ? 'Registration' : 'Login'} successful! Redirecting to Post Studio...`);
    window.location.href = '/';
  };

  return (
    <div style={{ maxWidth: 450, margin: '60px auto', padding: '0 20px' }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: '#1877F2' }}>
            {isRegister ? 'Create Your Account' : 'Welcome Back'}
          </h1>
          <p style={{ color: '#65676B', fontSize: 14 }}>
            Sign in to manage your cross-posting & live streaming
          </p>
        </div>

        {/* Social Authentication Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
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
            onClick={() => alert('Redirecting to Facebook Login...')}
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
            onClick={() => alert('Redirecting to Google Sign-In...')}
          >
            <span style={{ color: '#4285F4', fontWeight: 700, marginRight: 6 }}>G</span> Continue with Google
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '20px 0', 
          color: '#65676B', 
          fontSize: 13 
        }}>
          <div style={{ flex: 1, height: 1, backgroundColor: '#E4E6EB' }} />
          <span style={{ padding: '0 10px' }}>or with email</span>
          <div style={{ flex: 1, height: 1, backgroundColor: '#E4E6EB' }} />
        </div>

        {/* Email & Password Form */}
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

        <p style={{ marginTop: 20, fontSize: 14, color: '#65676B' }}>
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button 
            onClick={() => setIsRegister(!isRegister)} 
            style={{ background: 'none', border: 'none', color: '#1877F2', fontWeight: 600, cursor: 'pointer' }}
          >
            {isRegister ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

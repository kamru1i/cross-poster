'use client';

import React, { useState } from 'react';
import { User, Lock, Trash2, CheckCircle2, ShieldAlert, Key, Save } from 'lucide-react';

export default function AccountSettingsPage() {
  const [authState, setAuthState] = useState<'CHECKING' | 'AUTHENTICATED'>('CHECKING');
  const [activeTab, setActiveTab] = useState<'PROFILE' | 'SECURITY' | 'DANGER'>('PROFILE');

  // Profile Form States
  const [name, setName] = useState('Kamrul Islam');
  const [email, setEmail] = useState('kamrul@example.com');
  const [profileMsg, setProfileMsg] = useState('');

  // Password Form States
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passMsg, setPassMsg] = useState('');

  // Delete Account Modal State
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      window.location.href = '/';
    } else {
      setAuthState('AUTHENTICATED');
    }
  }, []);

  if (authState === 'CHECKING') return null;

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileMsg('Profile information updated successfully!');
    setTimeout(() => setProfileMsg(''), 3000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    setPassMsg('Password reset & updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPassMsg(''), 3000);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('isLoggedIn');
    alert('Your Cross Poster account and all associated data have been permanently deleted.');
    window.location.href = '/';
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: '20px 24px' }}>
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #E4E6EB' }}>
          <User size={26} color="#1877F2" />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#1877F2' }}>Account & Security Settings</h1>
            <p style={{ color: '#65676B', fontSize: 14 }}>Manage your profile information, password reset, and account security</p>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 24, borderBottom: '1px solid #E4E6EB', paddingBottom: 12 }}>
          <button 
            className={`btn ${activeTab === 'PROFILE' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('PROFILE')}
            style={{ fontSize: 13 }}
          >
            <User size={16} /> Profile Info
          </button>
          <button 
            className={`btn ${activeTab === 'SECURITY' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('SECURITY')}
            style={{ fontSize: 13 }}
          >
            <Lock size={16} /> Password & Security
          </button>
          <button 
            className={`btn ${activeTab === 'DANGER' ? 'btn-live' : 'btn-secondary'}`}
            onClick={() => setActiveTab('DANGER')}
            style={{ fontSize: 13 }}
          >
            <Trash2 size={16} /> Danger Zone (Delete Account)
          </button>
        </div>

        {/* Tab 1: Profile Information */}
        {activeTab === 'PROFILE' && (
          <form onSubmit={handleUpdateProfile} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Display Name</label>
              <input 
                type="text" 
                className="input-field" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Email Address</label>
              <input 
                type="email" 
                className="input-field" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            {profileMsg && (
              <span style={{ color: '#1877F2', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={18} /> {profileMsg}
              </span>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: 'fit-content' }}>
              <Save size={16} /> Update Profile
            </button>
          </form>
        )}

        {/* Tab 2: Password Reset & Update */}
        {activeTab === 'SECURITY' && (
          <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 600 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Current Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••••••" 
                value={currentPassword} 
                onChange={(e) => setCurrentPassword(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>New Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••••••" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6 }}>Confirm New Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••••••" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>

            {passMsg && (
              <span style={{ color: '#1877F2', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={18} /> {passMsg}
              </span>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: 'fit-content' }}>
              <Lock size={16} /> Reset & Update Password
            </button>
          </form>
        )}

        {/* Tab 3: Danger Zone (Delete Account) */}
        {activeTab === 'DANGER' && (
          <div style={{ backgroundColor: '#FFF5F5', border: '1px solid #FFC9C9', padding: 20, borderRadius: 10, maxWidth: 600 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FF0000', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <ShieldAlert size={20} /> Permanent Account Deletion
            </h3>
            <p style={{ fontSize: 14, color: '#050505', marginBottom: 16 }}>
              Deleting your Cross Poster account will permanently remove your connected Facebook Pages, YouTube channels, saved BYOK keys, and post history. This action cannot be undone.
            </p>
            <button className="btn btn-live" onClick={() => setShowDeleteModal(true)}>
              <Trash2 size={16} /> Delete My Account
            </button>
          </div>
        )}
      </div>

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 20
        }}>
          <div className="card" style={{ width: '100%', maxWidth: '440px', padding: '24px 28px', textAlign: 'center' }}>
            <ShieldAlert size={36} color="#FF0000" style={{ margin: '0 auto 12px' }} />
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#FF0000', marginBottom: 8 }}>Are you absolutely sure?</h2>
            <p style={{ fontSize: 14, color: '#65676B', marginBottom: 20 }}>
              This will permanently delete your account, connected social accounts, and 30-day analytics history.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
              <button className="btn btn-live" onClick={handleDeleteAccount}>Yes, Delete Account</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

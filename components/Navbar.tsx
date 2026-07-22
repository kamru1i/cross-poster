'use client';

import React from 'react';
import Link from 'next/link';
import { Share2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar" style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E4E6EB', position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Left: Brand Logo */}
      <Link href="/" className="brand-title" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <Share2 size={24} color="#1877F2" />
        <span style={{ fontSize: 18, fontWeight: 700, color: '#1877F2' }}>Cross Poster</span>
      </Link>
    </nav>
  );
}

// src/components/Header.tsx
'use client'; // Diperlukan karena kita akan menggunakan state (useState)

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Impor ikon untuk menu

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>
          Sandiyasa.
        </Link>

        {/* Menu Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#projects" className="text-gray-600 hover:text-teal-600">Studi Kasus</Link>
          <Link href="/services" className="text-gray-600 hover:text-teal-600">Layanan</Link>
          <Link href="/about" className="text-gray-600 hover:text-teal-600">Tentang Saya</Link>
          <Link href="/contact" className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition-colors">Kontak</Link>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile (Muncul saat isMenuOpen true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-8 shadow-lg">
          <Link href="/#projects" className="text-lg text-gray-700" onClick={() => setIsMenuOpen(false)}>Studi Kasus</Link>
          <Link href="/services" className="text-lg text-gray-700" onClick={() => setIsMenuOpen(false)}>Layanan</Link>
          <Link href="/about" className="text-lg text-gray-700" onClick={() => setIsMenuOpen(false)}>Tentang Saya</Link>
          <Link href="/contact" className="text-lg text-gray-700" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
        </div>
      )}
    </header>
  );
}
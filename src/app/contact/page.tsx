// src/app/kontak/page.tsx
'use client'; // Ini penting agar kita bisa menggunakan interaktivitas seperti useState

import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  // State untuk menyimpan data dari form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fungsi yang dijalankan saat form disubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah refresh halaman
    console.log("Data Formulir:", formData);
    alert("Pesan Terkirim! (Cek console untuk melihat datanya)");
    // NANTI: Di sini kita akan menambahkan kode untuk mengirim data ke n8n
  };

  return (
    <main className="pt-24 bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Hubungi Saya</h1>
          <p className="mt-4 text-lg text-gray-600">
            Punya proyek atau pertanyaan? Saya siap membantu.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Kolom Informasi Kontak */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Info Kontak</h2>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-teal-600" />
              <a href="mailto:emailanda@example.com" className="text-gray-700 hover:text-teal-600">
                emailanda@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-teal-600" />
              <Link href="https://linkedin.com/in/your-username" target="_blank" className="text-gray-700 hover:text-teal-600">
                LinkedIn Profile
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6 text-teal-600" />
              <Link href="https://github.com/your-username" target="_blank" className="text-gray-700 hover:text-teal-600">
                GitHub Profile
              </Link>
            </div>
          </div>

          {/* Kolom Formulir */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <Input 
                label="Nama Lengkap" 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <Input 
                label="Alamat Email" 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <Textarea 
                label="Pesan Anda" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
              <Button type="submit">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
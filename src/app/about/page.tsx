// src/app/tentang-saya/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-24 bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Tentang Saya</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Seorang spesialis otomatisasi yang bersemangat dalam memecahkan masalah kompleks dan menciptakan efisiensi.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Kolom Gambar */}
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
            <Image 
              src="/profile-picture.jpg" // Ganti dengan foto Anda
              alt="Foto Profil [Nama Anda]"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Kolom Teks Narasi */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Filosofi Saya</h2>
            <div className="prose lg:prose-lg max-w-none text-gray-700">
              <p>
                Saya percaya bahwa teknologi terbaik adalah yang bekerja di belakang layar, membebaskan manusia untuk melakukan pekerjaan yang lebih kreatif dan strategis. Perjalanan saya di dunia teknologi dimulai dengan... [Ceritakan kisah Anda di sini].
              </p>
              <p>
                Keahlian saya di n8n bukan hanya tentang menghubungkan API, tetapi tentang memahami proses bisnis secara mendalam dan merancang alur kerja yang logis, andal, dan mudah dipelihara.
              </p>
              <Link 
                href="/cv-anda.pdf" // Letakkan CV di folder /public
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition-colors no-underline"
              >
                <Download className="w-5 h-5" />
                Unduh CV Saya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
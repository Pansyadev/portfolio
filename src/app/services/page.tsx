// src/app/layanan/page.tsx
import ServiceCard from '@/components/ServiceCard';
import { Workflow, Code, Lightbulb } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="pt-24 bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Layanan Saya</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Saya menyediakan solusi otomatisasi end-to-end untuk membantu bisnis Anda tumbuh dan beroperasi lebih efisien.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kita menggunakan kembali komponen ServiceCard di sini */}
          <ServiceCard 
            icon={Workflow}
            title="Otomatisasi Alur Kerja Kustom"
            description="Saya merancang dan membangun alur kerja n8n dari nol yang disesuaikan dengan proses bisnis unik Anda, menghemat waktu dan mengurangi human error."
          />
          <ServiceCard 
            icon={Code}
            title="Pengembangan Node Kustom"
            description="Jika n8n tidak memiliki integrasi yang Anda butuhkan, saya bisa membuat Node kustom menggunakan TypeScript untuk terhubung ke API internal atau layanan pihak ketiga."
          />
          <ServiceCard 
            icon={Lightbulb}
            title="Konsultasi & Optimalisasi"
            description="Saya menganalisis proses manual Anda, mengidentifikasi peluang otomatisasi, dan memberikan solusi strategis untuk meningkatkan efisiensi operasional."
          />
           {/* Anda bisa menambahkan lebih banyak kartu layanan di sini jika perlu */}
        </div>
      </div>
    </main>
  );
}
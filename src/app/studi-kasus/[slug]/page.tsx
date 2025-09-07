import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Target, Wrench, Layers, TrendingUp, Clock, CheckCircle } from 'lucide-react';

// LANGKAH 22: Memberitahu Next.js untuk membuat halaman HTML statis untuk setiap proyek saat proses build.
// Ini sangat baik untuk kecepatan loading dan SEO.
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // LANGKAH 21: Logika untuk mencari data proyek yang sesuai berdasarkan 'slug' dari URL.
  const project = projects.find((p) => p.slug === params.slug);

  // Jika URL slug tidak cocok dengan data proyek manapun, tampilkan halaman 404 Not Found.
  if (!project) {
    notFound();
  }

  // Jika proyek ditemukan, render JSX di bawah ini dengan data dari objek 'project'.
  return (
    <main className="pt-20">
      <article>
        {/* Header Proyek */}
        <header className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <p className="text-teal-600 font-semibold mb-2">{project.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{project.title}</h1>
          </div>
        </header>

        {/* Gambar Utama Proyek */}
        <div className="container mx-auto px-6 -mt-12 md:-mt-16">
          <div className="relative h-64 md:h-96 w-full rounded-lg shadow-2xl overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={`Gambar proyek ${project.title}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Kolom Statistik */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Wrench className="w-8 h-8 mx-auto text-teal-600 mb-4" />
              <h3 className="font-bold text-gray-800 mb-1">Peran Saya</h3>
              <p className="text-gray-600">{project.stats.role}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-8 h-8 mx-auto text-teal-600 mb-4" />
              <h3 className="font-bold text-gray-800 mb-1">Timeline</h3>
              <p className="text-gray-600">{project.stats.timeline}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="w-8 h-8 mx-auto text-teal-600 mb-4" />
              <h3 className="font-bold text-gray-800 mb-1">Hasil Utama</h3>
              <p className="text-gray-600">{project.stats.result}</p>
            </div>
          </div>
        </section>
        
        {/* Konten Utama Studi Kasus */}
        <section className="container mx-auto px-6 pb-24">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="prose lg:prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="flex items-center text-2xl font-bold text-gray-800">
                  <Target className="w-6 h-6 mr-3 text-teal-600"/> Tantangan
                </h2>
                <p>{project.problem}</p>
              </div>

              <div className="mb-12">
                <h2 className="flex items-center text-2xl font-bold text-gray-800">
                  <Layers className="w-6 h-6 mr-3 text-teal-600"/> Solusi & Pendekatan
                </h2>
                <p>{project.solution}</p>
                <div className="bg-gray-100 p-4 rounded-lg my-6 text-center text-gray-500 italic">
                  <p>-- Visualisasi alur kerja n8n akan ditampilkan di sini --</p>
                </div>
              </div>

              <div>
                <h2 className="flex items-center text-2xl font-bold text-gray-800">
                  <TrendingUp className="w-6 h-6 mr-3 text-teal-600"/> Hasil & Dampak
                </h2>
                <p>{project.impact}</p>
              </div>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}
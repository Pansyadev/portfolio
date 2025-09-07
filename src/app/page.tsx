import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import ServiceCard from '@/components/ServiceCard';
import { Workflow, Code, Lightbulb, Quote } from 'lucide-react'; // Impor ikon spesifik yang kita butuhkan
import Link from 'next/link';
export default function Home() {

  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-16 lg:p-24">

      {/* SEKSI 1: HERO */}
<section id="hero" className="w-full h-screen flex items-center justify-center text-center bg-gray-50">
  <div className="max-w-3xl px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
      Spesialis Otomatisasi & <span className="text-teal-600">n8n Full Stack</span> Developer
    </h1>
    <p className="mt-6 text-lg md:text-xl text-gray-600">
      Mengubah proses manual yang rumit menjadi alur kerja otomatis yang efisien.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <Link
        href="/#projects"
        className="bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Lihat Proyek Saya
      </Link>
      <Link
        href="/contact"
        className="bg-white text-gray-700 px-8 py-3 rounded-md text-lg font-semibold border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        Hubungi Saya
      </Link>
    </div>
  </div>
</section>

     {/* SEKSI 2: PERKENALAN SINGKAT & SOCIAL PROOF */}
<section id="about-preview" className="w-full py-20 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Dipercaya untuk Mendorong Efisiensi
    </h2>
    <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
      Sebagai spesialis otomatisasi, saya membantu bisnis-bisnis seperti milik Anda untuk menyederhanakan proses yang kompleks, mengintegrasikan sistem, dan membebaskan waktu untuk fokus pada hal yang benar-benar penting.
    </p>

    {/* Logo Klien */}
   
  </div>
</section>

      {/* SEKSI 3: STUDI KASUS UNGGULAN */}
<section id="projects" className="w-full py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
      Studi Kasus Unggulan
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={`/studi-kasus/${project.slug}`}
          tags={[project.category]}
        />
      ))}
    </div>
  </div>
</section>

     {/* SEKSI 4: LAYANAN UTAMA */}
<section id="services" className="w-full py-24">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Bagaimana Saya Bisa Membantu Anda
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Saya fokus pada tiga area utama untuk membawa efisiensi ke bisnis Anda.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  </div>
</section>

     {/* SEKSI 5: TESTIMONI */}
<section id="testimonials" className="w-full py-24 bg-white">
  <div className="container mx-auto px-6 text-center">
    <Quote className="w-12 h-12 mx-auto text-teal-500 mb-6" />
    <blockquote className="max-w-3xl mx-auto">
      <p className="text-xl md:text-2xl font-medium text-gray-700 italic">
  ‘Bekerja dengan [Nama Anda] benar-benar mengubah cara kami beroperasi. Alur kerja otomatis yang dibangunnya berhasil menghemat lebih dari 20 jam kerja manual setiap minggu. Sangat direkomendasikan!’
</p>
      <cite className="block mt-6 not-italic">
        <span className="font-bold text-gray-800">Nama Klien</span>
        <span className="text-gray-600">, CEO di Perusahaan Klien</span>
      </cite>
    </blockquote>
  </div>
</section>

      {/* SEKSI 6: FINAL CALL-TO-ACTION (CTA) */}
<section id="cta" className="w-full py-20 bg-teal-600">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Siap Mengotomatisasi Bisnis Anda?
    </h2>
    <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
      Mari kita diskusikan bagaimana saya bisa membantu Anda menyederhanakan proses, meningkatkan produktivitas, dan mencapai tujuan bisnis Anda.
    </p>
    <Link
      href="/contact"
      className="bg-white text-teal-700 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
    >
      Mari Berdiskusi
    </Link>
  </div>
</section>

 </main> /* <-- TAMBAHKAN TAG PENUTUP INI DI PALING AKHIR */
  );
}
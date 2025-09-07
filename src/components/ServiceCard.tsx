import type { ElementType } from 'react';

// Mendefinisikan tipe data untuk props
type ServiceCardProps = {
  icon: ElementType; // Tipe khusus untuk menerima komponen sebagai prop
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
      {/* Ikon Layanan */}
      <div className="bg-teal-100 p-4 rounded-full mb-6">
        <Icon className="w-8 h-8 text-teal-600" />
      </div>

      {/* Judul Layanan */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

      {/* Deskripsi Layanan */}
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
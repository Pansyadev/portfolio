import Image from 'next/image';
import Link from 'next/link';

// Menentukan tipe data yang akan diterima oleh komponen ini
type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
};

export default function ProjectCard({ title, description, imageUrl, projectUrl, tags }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Link href={projectUrl}>
        {/* Gambar Proyek */}
        <div className="relative h-56 w-full">
          <Image
            src={imageUrl}
            alt={`Gambar thumbnail untuk proyek ${title}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        {/* Konten Teks Kartu */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          
          {/* Tag Teknologi */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
// src/data/projects.ts

// Kita definisikan tipe data untuk setiap proyek agar konsisten (manfaat TypeScript)
export type Project = {
  slug: string;
  title: string;
  description: string; // Deskripsi singkat untuk kartu di halaman utama
  category: string;
  imageUrl: string;
  stats: {
    role: string;
    timeline: string;
    result: string;
  };
  problem: string;
  solution: string;
  impact: string;
};

// Array yang berisi semua data proyek kita
export const projects: Project[] = [
  {
    slug: "otomatisasi-laporan-penjualan",
    title: "Otomatisasi Laporan Penjualan Harian",
    description: "Membangun alur kerja n8n yang secara otomatis menarik data penjualan, menggabungkannya, dan mengirim laporan ringkas ke Slack setiap pagi.",
    category: "Otomatisasi Bisnis",
    imageUrl: "/placeholder-project-1.jpg",
    stats: {
      role: "n8n Developer",
      timeline: "2 Minggu",
      result: "-80% Waktu Reporting"
    },
    problem: "Tim penjualan menghabiskan 1-2 jam setiap hari secara manual mengumpulkan data dari 3 sumber berbeda untuk membuat laporan harian, menyebabkan inefisiensi dan potensi human error.",
    solution: "Saya merancang alur kerja n8n yang berjalan setiap jam 7 pagi, terhubung ke API setiap platform penjualan, menarik data, menggabungkannya ke dalam format standar, lalu mem-posting ringkasan visual ke channel Slack khusus.",
    impact: "Menghemat sekitar 30 jam kerja per bulan untuk tim penjualan, memastikan data laporan selalu akurat dan tepat waktu, serta meningkatkan visibilitas performa harian bagi manajemen."
  },
  {
    slug: "sinkronisasi-data-crm",
    title: "Sinkronisasi Data CRM dan Email Marketing",
    description: "Membuat sistem sinkronisasi dua arah antara HubSpot dan Mailchimp menggunakan n8n, memastikan data pelanggan selalu konsisten di kedua platform.",
    category: "Integrasi Sistem",
    imageUrl: "/placeholder-project-2.jpg",
    stats: {
      role: "Automation Specialist",
      timeline: "3 Minggu",
      result: "100% Konsistensi Data"
    },
    problem: "Data kontak baru di HubSpot harus dimasukkan secara manual ke Mailchimp, dan sebaliknya. Proses ini lambat dan seringkali menyebabkan data pelanggan tidak sinkron.",
    solution: "Menggunakan Webhook Triggers di n8n. Saat kontak baru dibuat atau diperbarui di HubSpot, webhook akan memicu alur kerja untuk membuat/memperbarui kontak yang sama di Mailchimp, begitu juga sebaliknya. Ada logika pengecekan untuk menghindari duplikasi.",
    impact: "Menghilangkan sepenuhnya entri data manual antar sistem, memastikan tim marketing dan sales selalu bekerja dengan data pelanggan yang paling up-to-date, dan mengurangi keluhan pelanggan terkait data yang salah."
  },
  {
    slug: "custom-node-internal-api",
    title: "Custom Node untuk Integrasi Internal API",
    description: "Mengembangkan Node n8n kustom menggunakan TypeScript untuk memungkinkan integrasi dengan API internal perusahaan yang tidak didukung secara default.",
    category: "Pengembangan Node n8n",
    imageUrl: "/placeholder-project-3.jpg",
    stats: {
      role: "Full Stack n8n Developer",
      timeline: "4 Minggu",
      result: "Membuka Kemampuan Baru"
    },
    problem: "Perusahaan memiliki sistem internal dengan API yang unik dan tidak ada di daftar integrasi n8n. Tim tidak bisa mengotomatiskan proses yang melibatkan sistem krusial ini.",
    solution: "Saya menulis, menguji, dan mendeploy sebuah Node n8n kustom dari awal menggunakan TypeScript. Node ini menangani autentikasi dan endpoint spesifik dari API internal, membuatnya mudah digunakan seperti node lainnya bagi seluruh tim.",
    impact: "Memungkinkan tim non-teknis untuk membuat otomatisasi yang sebelumnya mustahil, membuka puluhan alur kerja baru, dan menjadikan n8n sebagai platform otomatisasi sentral yang sesungguhnya di perusahaan."
  },
];
"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/trechingbaen";

export function ContainerContent() {
  return (
    <TracingBeam className="px-6 h-auto">
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {dummyContent.map((item, itemIndex) => (
          <div key={`content-${itemIndex}`} className="mb-10">
            <div className="flex justify-start items-center gap-x-2">
              {Array.isArray(item.badge) ? (
                item.badge.map((badge, badgeIndex) => (
                  <h2 key={`badge-${badgeIndex}`} className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {badge}
                  </h2>
                ))
              ) : (
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>
              )}
            </div>

            <p className="text-xl mb-4 text-white">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert text-white">
              {item?.image && <Image src={item.image} alt="blog thumbnail" height={1000} width={1000} className="rounded-lg mb-10 object-cover" />}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "My Anime List",
    description: (
      <>
        <p>
          Situs web List Anime adalah proyek yang saya buat dengan tujuan menyediakan daftar anime yang lengkap dan terorganisir dengan baik untuk para penggemar anime. Situs ini dirancang untuk menjadi sumber referensi utama bagi siapa
          saja yang ingin menemukan dan mengetahui lebih banyak tentang berbagai judul anime. Dengan antarmuka yang bersih, responsif, dan mudah digunakan, pengguna dapat dengan mudah mencari anime favorit mereka, baik berdasarkan judul,
          genre, atau kata kunci lainnya.
        </p>
        <br />
        <p>
          Selain menyediakan daftar anime, situs ini juga memberikan informasi rinci tentang setiap judul, termasuk genre, jumlah episode, tahun rilis, dan sinopsis singkat. Pengguna dapat dengan cepat mendapatkan gambaran umum tentang
          anime yang mereka minati, sehingga memudahkan mereka dalam memutuskan anime mana yang ingin ditonton.
        </p>
        <br />
        <p>
          Untuk teknologi yang digunakan, situs List Anime memanfaatkan: Next.js: Framework React yang digunakan untuk membangun antarmuka pengguna yang dinamis dan server-side rendering, memastikan performa yang optimal dan SEO yang baik.
          Tailwind CSS: Framework CSS yang digunakan untuk mendesain antarmuka yang responsif dan estetis dengan cepat dan efisien. Jikan API: API yang digunakan untuk mengambil data anime dari MyAnimeList, menyediakan daftar anime yang
          up-to-date dan informasi detail lainnya.
        </p>
        <br />
      </>
    ),
    badge: ["React", "Next.js", "Tailwind"],
    image: "/project1.png",
  },
  {
    title: "Website Kelas RPL 1",
    description: (
      <>
        <p>
          Situs web Kelas 11 Rekayasa Perangkat Lunak 1 (RPL) SMKN Situraja adalah tempat di mana kenangan dan informasi berkumpul bagi siswa dan staf sekolah. Didesain dengan antarmuka yang bersih dan responsif, situs ini tidak hanya
          menyajikan informasi terkait jadwal pelajaran, piket, dan kegiatan siswa, tetapi juga menjadi ruang di mana kenangan indah bisa dibagikan.
        </p>
        <br />
        <p>Fitur utama dari situs ini termasuk:</p>
        <p>Galeri Foto yang Melimpah: Menampilkan banyak foto yang memperkaya pengalaman pengguna dengan kenangan dari kegiatan sekolah dan acara lainnya.</p>
        <br />
        <p>Informasi Jadwal dan Piket: Memberikan akses mudah kepada siswa dan staf untuk memeriksa jadwal pelajaran dan piket, membantu mereka terorganisir dalam kegiatan harian.</p>
        <br />
        <p>
          Situs ini dibangun menggunakan teknologi modern: Next.js: Framework React yang menyediakan server-side rendering dan pengalaman pengguna yang responsif dan cepat. Tailwind CSS: Framework CSS yang digunakan untuk desain antarmuka
          yang bersih dan estetis, memastikan situs ini mudah dinavigasi dan menyenangkan untuk digunakan.
        </p>
        <br />
        <p>
          Dengan kombinasi teknologi ini, Kelas 11 RPL SMKN Situraja menghadirkan pengalaman online yang menyenangkan dan informatif bagi semua pengguna, memfasilitasi pertukaran informasi dan kenangan di antara anggota komunitas sekolah.
        </p>
      </>
    ),
    badge: ["React", "Next.js", "Tailwind"],
    image: "/project2.png",
  },
  {
    title: "Software House Company Profile",
    description: (
      <>
        <p>
          Proyek ini sangat penting karena bertujuan untuk menciptakan sebuah wajah digital yang profesional dan informatif bagi sebuah software house. Situs web profil ini bukan hanya sekadar representasi online, tetapi juga menjadi media
          utama dalam memperkenalkan perusahaan kepada calon klien potensial serta membangun kepercayaan dan reputasi yang kuat di pasar.
        </p>
        <br />
        <p>
          Dengan desain yang didasarkan pada kebutuhan untuk menyampaikan informasi secara jelas dan menarik, situs web ini akan menghadirkan pengalaman pengguna yang memikat. Mulai dari halaman utama yang menampilkan visi dan nilai inti
          perusahaan, hingga bagian tentang layanan-layanan unggulan yang ditawarkan, setiap elemen akan dirancang untuk mencerminkan profesionalisme dan kompetensi.
        </p>
        <br />
        <p>Secara keseluruhan, proyek ini tidak hanya tentang menciptakan sebuah situs web, tetapi juga tentang membangun sebuah platform digital yang mampu memposisikan perusahaan sebagai pemimpin di industri teknologi.</p>
      </>
    ),
    badge: ["React", "Next.js", "Tailwind"],
    image: "/project3.png",
  },
];

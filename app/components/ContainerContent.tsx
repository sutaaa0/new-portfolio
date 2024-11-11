"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/trechingbaen";
import Link from "next/link";
import { LinkPreview } from "./ui/link-review";

export function ContainerContent() {
  return (
    <TracingBeam className="px-7 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto antialiased pt-3 xs:pt-4 pb-12 sm:pb-16">
        {dummyContent.map((item, itemIndex) => (
          <div key={`content-${itemIndex}`} className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 group">
            <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-2.5">
              {Array.isArray(item.badge) ? (
                item.badge.map((badge, badgeIndex) => (
                  <h2 key={`badge-${badgeIndex}`} className="bg-black/90 text-white rounded-full text-[10px] xs:text-xs sm:text-sm w-fit px-2 xs:px-2.5 sm:px-3 md:px-4 py-0.5 xs:py-1 mb-2 xs:mb-3 sm:mb-4">
                    {badge}
                  </h2>
                ))
              ) : (
                <h2 className="bg-black/90 text-white rounded-full text-[10px] xs:text-xs sm:text-sm w-fit px-2 xs:px-2.5 sm:px-3 md:px-4 py-0.5 xs:py-1 mb-2 xs:mb-3 sm:mb-4">{item.badge}</h2>
              )}
            </div>

            <LinkPreview className="text-base xs:text-lg sm:text-xl md:text-2xl mb-2 xs:mb-3 sm:mb-4 text-white hover:text-gray-200 transition-colors inline-block" url={item.link}>
              {item.title}
            </LinkPreview>

            <div className="prose prose-sm xs:prose sm:prose-base lg:prose-lg mt-2 text-white ">
              {item?.image && (
                <Link href={item.link} className="block transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="relative w-full aspect-[16/9] mb-3 xs:mb-4 sm:mb-5 md:mb-6 rounded-lg overflow-hidden">
                    <Image src={item.image} alt="blog thumbnail" fill className="rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </Link>
              )}
              <div className="text-white">{item.description}</div>
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
    link: "https://my-anime-list-phi.vercel.app/",
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
    link: "https://spelgesa.vercel.app/",
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
    link: "https://software-house-eta.vercel.app/",
  },
];

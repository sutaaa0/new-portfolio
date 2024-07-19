import React from "react";
import { TracingBeam } from "../components/ui/trechingbaen";
import Image from "next/image";

function Info() {
  return (
    <div className="flex flex-col ">
      <TracingBeam>
        <div className="flex flex-col">
          <div className="flex flex-col sm:px-0 px-12">
            <h1 className="text-[#fff] text-3xl sm:text-5xl">Passionate About Crafting Beautiful and Empowering Web Experiences</h1>
          </div>
          <div className="flex sm:flex-row flex-col w-full mt-12 gap-x-12 text-[#555555]">
            <div className="sm:w-1/2 w-full sm:px-0 px-6">
              <Image src={"/dodi2.jpg"} width={300} height={300} alt={"character"} className="rounded-md h-[600px] w-full" />
              <div className="mt-12 flax flex-col justify-center items-start">
                <h1 className="text-[#fff] text-2xl">Perjalanan Menjadi Web Development</h1>
                <p className="mt-4">
                  Hallo saya Dodi Suta. Saat ini pada bulan Juli 2024, saya seorang siswa tahun ke-3 di sekolah kejuruan jurusan Rekayasa Perangkat Lunak (RPL). Selama masa studi saya, saya menjadi sangat tertarik dengan pengembangan web.{" "}
                  <br />
                  <br /> Saya terpesona dengan konsep modularitas dan kemampuan beradaptasi - bagaimana lingkungan digital dapat berevolusi dengan mulus untuk memenuhi kebutuhan pengguna dan bisnis yang terus berubah. <br />
                  <br /> Semangat ini mendorong saya untuk menciptakan solusi web yang dapat diskalakan dan fleksibel yang tumbuh bersama audiens mereka.
                </p>
              </div>
              <Image alt="coding" src={"/coffe.jpg"} width={300} height={300} className="rounded-md h-[600px] w-full mt-12" />
              <div className="mt-12 flax flex-col justify-center items-start">
                <h1 className="text-[#fff] text-2xl">Belajar Mandiri</h1>
                <p className="mt-4">
                  Sepanjang perjalanan belajar secara mandiri, saya mendalami berbagai teknologi dan alat pengembangan web. Saya menguasai bahasa pemrograman seperti HTML, CSS, JavaScript dan PHP, serta menjelajahi framework seperti React,
                  Next.js, Laravel , Bootstrap dan Tailwind CSS. <br />
                  <br /> Saya juga bisa dalam teknologi backend, termasuk Node.js dan framework seperti Express serta ORM seperti Prisma dan basis data seperti MySQL dan PosgreSQL.
                </p>
              </div>
              <Image alt="dinding" src={"/dinding.jpg"} width={300} height={300} className="rounded-md h-[600px] w-full mt-12" />
              <div className="mt-12 flax flex-col justify-center items-start">
                <h1 className="text-[#fff] text-2xl">Di Waktu luang saya</h1>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-4">Di waktu luang saya, saya menghabiskan waktu untuk belajar coding dan mungkin bermain game untuk menghilangkan kejenuhan.</p>
                  <p>Thanks for stopping by!</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 text-[#555555] sm:px-0 px-6">
              <p>
                Saya berdedikasi untuk menciptakan solusi web yang elegan dan fungsional yang memberdayakan pengguna dan meningkatkan pengalaman online mereka. <br />
                <br /> Semangat saya terletak pada mengubah ide menjadi situs web yang intuitif dan menarik secara visual yang tidak hanya memenuhi tetapi juga melebihi harapan pengguna. <br />
                <br /> Melalui perhatian yang cermat terhadap detail dan pemahaman yang mendalam tentang teknologi web terbaru, saya berusaha keras untuk membangun produk yang menginspirasi dan memungkinkan orang untuk mencapai lebih banyak
                hal.
              </p>
              <Image alt="jepang" src={"/jepang.jpg"} width={300} height={300} className="rounded-md h-[600px] w-full mt-12" />
              <div className="mt-12 flax flex-col justify-center items-start">
                <h1 className="text-[#fff] text-2xl">Namun, saya ingin lebih.</h1>
                <p className="mt-4">
                  Menurut pendapat saya, teknologi di sekolah berkembang terlalu lambat, jadi saya tidak puas hanya dengan apa yang diajarkan di sana. <br />
                  <br /> Saya mulai belajar secara otodidak dari luar melalui platform seperti YouTube, AI, dan blog komunitas pengembang. Saya ingin mendorong keterampilan pengembangan saya dengan lebih cepat dan memberikan dampak positif
                  pada lebih banyak orang.
                </p>
              </div>
              <Image alt="jepang" src={"/book.jpg"} width={300} height={300} className="rounded-md h-[600px] w-full mt-12" />
              <div className="mt-12 flax flex-col justify-center items-start">
                <h1 className="text-[#fff] text-2xl">Visi Saya untuk Masa Depan</h1>
                <p className="mt-4">
                  Ke depan, tujuan saya adalah terus mendorong batasan pengembangan web. Saya bercita-cita untuk menciptakan solusi web yang inovatif dan berdampak yang meningkatkan pengalaman pengguna dan mendorong kesuksesan bisnis.
                  <br />
                  <br />
                  Dengan memanfaatkan teknologi mutakhir dan pendekatan yang berpusat pada pengguna, saya ingin membuat perbedaan yang berarti dalam lanskap digital.
                </p>
              </div>
              <Image alt="headset" src={"/headset.jpg"} width={300} height={300} className="rounded-md h-[600px] w-full mt-12" />
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}

export default Info;

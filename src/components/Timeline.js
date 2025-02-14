'use client';
import React, { useRef , useState} from 'react';
// import { Github } from 'lucide-react';
import { TimelineContent } from '@/components/core/framer-timeline';

import { BoxReveal } from "@/components/magicui/box-reveal";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Sparkles } from '@/components/core/sparkles';
import { MediaModal } from '@/components/core/modal';
import Title from './core/Judul';
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Import } from 'lucide-react';
import { TextAnimate } from "@/components/magicui/text-animate";
const TimelineAnimation = () => {
  function parseTitleWithNumberTicker(title) {
    const regex = /\d+/g; // Mendeteksi angka dalam string
    const parts = title.split(regex); // Pecah string berdasarkan angka
    const numbers = title.match(regex); // Dapatkan angka yang terdeteksi
  
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {numbers && numbers[index] && (
          <NumberTicker
            value={parseInt(numbers[index])}
            className="whitespace-pre-wrap text-white font-medium tracking-tighter"
          />
        )}
      </React.Fragment>
    ));
  }
  

  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (index) => {
    setActiveSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const timelineData = [
    {
      title: 'Abad Ke-14: Karya Mpu Tantular',
      description: `"Bhinneka Tunggal Ika" pertama kali dicatat dalam karya sastra Kakawin Sutasoma yang ditulis oleh Mpu Tantular pada masa kerajaan Majapahit. Dalam karya ini, semboyan tersebut digunakan untuk menggambarkan persatuan meskipun ada perbedaan agama antara Hindu dan Buddha.`,
      imgSrc: '/Tantular.jpeg',
    },
    {
      title: 'Abad Ke-15 - Ke-16: Penyebaran dalam Budaya Majapahit',
      description: `Konsep "Bhinneka Tunggal Ika" semakin dikenal dalam budaya Majapahit dan dipahami sebagai simbol persatuan dalam keragaman. Di masa ini, Indonesia (terutama pulau Jawa) terdiri dari berbagai kerajaan dan budaya yang berbeda, tetapi semboyan ini mencerminkan harapan untuk kesatuan di tengah perbedaan tersebut.`,
      imgSrc: 'https://static.republika.co.id/uploads/member/images/news/240608194238-988.jpg',
    },
    {
      title: 'Abad Ke-20: Penjajahan Belanda',
      description: `Selama masa penjajahan Belanda, Indonesia terdiri dari banyak kelompok etnis dan budaya yang berbeda. Semboyan "Bhinneka Tunggal Ika" tetap hidup dalam kesadaran rakyat sebagai simbol harapan untuk persatuan di tengah penindasan kolonial.`,
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Raden_Saleh_-_Diponegoro_arrest.jpg/2560px-Raden_Saleh_-_Diponegoro_arrest.jpg',
    },
    {
      title: '17 Agustus 1945: Kemerdekaan Indonesia',
      description: ` Setelah Indonesia merdeka, semboyan "Bhinneka Tunggal Ika" diambil sebagai semboyan resmi negara Indonesia, mencerminkan tekad untuk mempersatukan berbagai suku, agama, dan budaya yang ada di seluruh Indonesia. Semboyan ini tercantum dalam lambang negara Garuda Pancasila.`,
      imgSrc: 'https://awsimages.detik.net.id/community/media/visual/2023/05/30/lukisan-dullah-berjudul-bung-karno-di-tengah-perang-revolusi-1966-koleksi-museum-macan_43.jpeg?w=1200',
    },
    {
      title: '1945 - Sekarang: Implementasi dalam Pancasila',
      description: `"Bhinneka Tunggal Ika" menjadi bagian dari nilai-nilai Pancasila, terutama pada sila ketiga, yaitu "Persatuan Indonesia". Sejak saat itu, semboyan ini menjadi pedoman penting dalam menjaga persatuan bangsa Indonesia yang terdiri dari banyak suku, bahasa, dan agama.`,
      imgSrc: 'https://i.pinimg.com/736x/db/60/26/db6026bd6169acb0a2a149932d1fb3d3.jpg',
    },
    {
      title: 'Era Modern: Penerapan dalam Kehidupan Sehari-hari',
      description: `Pada masa kini, "Bhinneka Tunggal Ika" tetap relevan dalam kehidupan bermasyarakat di Indonesia. Meskipun negara ini terdiri dari berbagai kelompok dengan perbedaan yang kaya, semboyan ini terus menjadi landasan untuk menjaga kerukunan, persatuan, dan toleransi antar warga negara Indonesia.`,
      imgSrc: 'https://cdn.grid.id/crop/0x0:0x0/x/photo/2024/08/02/17-agustusjpg-20240802022116.jpg',
    },
  ];

  return (

    <main className="max-w-7xl m-auto space-y-16 md:space-y-52 py-16">
  <section className='text-white     md:h-72  w-full  grid place-content-center '>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <h1 className='2xl:text-7xl text-4xl md:text-5xl px-8 font-semibold w-[12.4em]  md:w-[11.57em] text-center tracking-tight leading-[120%]'>
            <TextAnimate animation="slideLeft" by="character">
    Asal usul semboyan
    Bhinneka Tunggal Ika
  </TextAnimate>


            </h1>
          </section>
{/* <section className='text-white     md:h-[70vh]  w-full  grid place-content-center '>
    <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

    <h1 className='2xl:text-7xl text-4xl md:text-5xl px-8 font-semibold  text-center tracking-tight leading-[120%]'>
      Asal Usul Semboyan
    </h1>

  </section> */}

        {timelineData.map((item, index) => (
    <section  key={index}
    className="sm:grid md:space-y-0 space-y-4 grid-cols-2 gap-10 pt-10 "
    >
  
  <div 
    key={index} 
    className={index % 2 === 0 ? 'md:order-2' : ''}
  >
    <BoxReveal boxColor={"#0357ff"} duration={0.5}>
      <MediaModal
        imgSrc={
         item.imgSrc
        }
      />
    </BoxReveal>
  </div>

    <div className="space-y-2 lg:space-y-6 content-center text-white">
      {' '}
       
      <BoxReveal boxColor={"#0357ff"} duration={0.5}>
        <h1 className="text-4xl md:text-2xl lg:text-5xl font-medium">
          
        {parseTitleWithNumberTicker(item.title)}<span className='text-blue-400'>.</span>
        </h1>
        </BoxReveal>
   
        <BoxReveal boxColor={"#0357ff"} duration={0.5}>
        <p
        className="text-base md:text-sm lg:text-lg content-center text-gray-400 cursor-pointer group"
        onClick={() => toggleSection(index)} 
      >
        <span className={activeSections[index] ? '' : 'line-clamp-3 md:line-clamp-none'}>
          {item.description} {/* Menampilkan deskripsi */}
        </span>
        <span
          className={`${
            activeSections[index] ? 'hidden' : 'text-blue-400'
          } md:hidden group-hover:text-white transition-all ease-in-out`}
        >
         Baca selengkapnya
        </span>
      </p>
      </BoxReveal>
      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <a
          className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
          href="https://github.com/naymurdev"
          target="_blank">
          <Github />
          Start it Now
        </a>
      </BoxReveal> */}
    </div>
  </section>
   ))}
  </main>
  );
};
export default TimelineAnimation;
